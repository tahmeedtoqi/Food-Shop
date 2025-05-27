import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';
import Button from '../components/ui/Button';

const CartPage: React.FC = () => {
  const { items, clearCart } = useCartStore();
  const isEmpty = items.length === 0;

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-6">
          <Link to="/menu" className="flex items-center text-primary-600 hover:text-primary-700">
            <ArrowLeft className="h-4 w-4 mr-1" />
            <span>Continue Shopping</span>
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-secondary-900 mb-6">Your Cart</h1>

        {isEmpty ? (
          <div className="bg-white rounded-lg shadow-card p-8 text-center">
            <div className="flex justify-center mb-4">
              <ShoppingBag className="h-16 w-16 text-secondary-400" />
            </div>
            <h2 className="text-xl font-medium text-secondary-900 mb-2">Your cart is empty</h2>
            <p className="text-secondary-600 mb-6">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link to="/menu">
              <Button variant="primary">Browse Menu</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-card p-4 border border-secondary-200">
                <div className="flex justify-between items-center border-b border-secondary-200 pb-4 mb-4">
                  <h2 className="text-lg font-medium text-secondary-900">
                    Cart Items ({items.length})
                  </h2>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-red-500 hover:text-red-700"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </Button>
                </div>

                <div className="space-y-1">
                  {items.map((item) => (
                    <CartItem key={item.menuItem.id} item={item} />
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <CartSummary />
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default CartPage;