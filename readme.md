# API Reference

## Overview

This document outlines all APIs used in the Food Shop project and their configuration details. The project uses a combination of REST and Client-Side APIs.

## API Types

### 1. REST API (Stripe)
The project uses Stripe's REST API for payment processing through two Edge Functions:

- **Checkout API Endpoint**
  - Type: REST
  - Method: POST
  - Path: `/functions/v1/stripe-checkout`
  - Purpose: Creates payment sessions

- **Webhook API Endpoint**
  - Type: REST
  - Method: POST
  - Path: `/functions/v1/stripe-webhook`
  - Purpose: Handles payment webhooks

### 2. Client-Side State API (Zustand)
A client-side state management API for cart functionality.

- Type: Client-Side State Management
- Implementation: Zustand Store
- Pattern: Flux/Redux-like

### Available Methods

- `addItem(item: MenuItem, quantity?: number, specialInstructions?: string)`: Add item to cart
- `removeItem(itemId: string)`: Remove item from cart
- `updateQuantity(itemId: string, quantity: number)`: Update item quantity
- `updateInstructions(itemId: string, instructions: string)`: Update special instructions
- `clearCart()`: Clear all items
- `itemCount()`: Get total number of items
- `totalPrice()`: Calculate total price

### Usage Example
```typescript
const { addItem, removeItem } = useCartStore();

// Add item to cart
addItem(menuItem, 1);

// Remove item
removeItem(menuItem.id);
```

## Menu Data API

Currently implemented as a static data module, designed to be replaced with a REST API integration.

### Data Structure
```typescript
interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  tags: string[];
  popular: boolean;
}
```

### Usage
```typescript
import { menuItems } from '../data/menu-items';
import { categories } from '../data/categories';
```

## Stripe Integration

### Prerequisites

1. Create a Stripe account at [stripe.com](https://stripe.com)
2. Get your API keys from the Stripe Dashboard

### Environment Variables

Create a `.env` file with the following variables:

```env
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key
STRIPE_SECRET_KEY=sk_test_your_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
```

### Edge Functions (REST API Endpoints)

Two Supabase Edge Functions handle Stripe integration:

1. **Stripe Checkout** (`/supabase/functions/stripe-checkout`)
   - Type: REST API
   - Method: POST
   - Purpose: Creates checkout sessions
   - Request Format: JSON
   - Response: Stripe Checkout Session URL

2. **Stripe Webhook** (`/supabase/functions/stripe-webhook`)
   - Type: REST API
   - Method: POST
   - Purpose: Processes webhook events
   - Authentication: Stripe Signature Verification
   - Response: 200 OK or Error

### Database Schema

```sql
-- Orders table
create table stripe_orders (
  id uuid primary key default gen_random_uuid(),
  checkout_session_id text not null,
  payment_intent_id text,
  customer_id text not null,
  amount_subtotal integer not null,
  amount_total integer not null,
  currency text not null,
  payment_status text not null,
  status text not null,
  created_at timestamptz default now()
);

-- Subscriptions table (if using subscriptions)
create table stripe_subscriptions (
  id uuid primary key default gen_random_uuid(),
  customer_id text unique not null,
  subscription_id text,
  price_id text,
  current_period_start integer,
  current_period_end integer,
  cancel_at_period_end boolean,
  payment_method_brand text,
  payment_method_last4 text,
  status text not null,
  created_at timestamptz default now()
);
```

### Setting Up Stripe Products

1. Go to Stripe Dashboard > Products
2. Create products with the following details:
   - Name
   - Description
   - Price
   - Currency
   - Tax settings (if applicable)

### Testing

1. Use Stripe test cards:
   - Success: 4242 4242 4242 4242
   - Decline: 4000 0000 0000 0002
   
2. Test webhook locally:
   ```bash
   stripe listen --forward-to localhost:54321/functions/v1/stripe-webhook
   ```

### Deployment

1. Deploy Edge Functions:
   ```bash
   supabase functions deploy stripe-checkout
   supabase functions deploy stripe-webhook
   ```

2. Update webhook endpoint in Stripe Dashboard:
   - Add endpoint: `https://[PROJECT_REF].supabase.co/functions/v1/stripe-webhook`
   - Select events to monitor

### Error Handling

The webhook handler includes comprehensive error handling:
- Signature verification
- Event validation
- Database operation failures
- Payment status updates

### Security Considerations

1. Always use environment variables for sensitive data
2. Verify webhook signatures
3. Use Stripe's test mode during development
4. Implement proper error handling
5. Follow PCI compliance guidelines