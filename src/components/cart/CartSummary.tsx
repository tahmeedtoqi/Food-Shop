import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import { useCartStore } from '../../store/cartStore';
import { formatCurrency } from '../../lib/utils';
import { ArrowRight } from 'lucide-react';

const CartSummary: React.FC = () => {
  const navigate = useNavigate();
  const { items, totalPrice, itemCount } = useCartStore();
  
  const subtotal = totalPrice();
  const deliveryFee = 2.99;
  const tax = subtotal * 0.07; // 7% tax
  const total = subtotal + deliveryFee + tax;

  const handleCheckout = () => {
    navigate('/checkout');
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-card p-4 border border-secondary-200">
      <h3 className="text-lg font-medium text-secondary-900 mb-4">Order Summary</h3>
      
      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-secondary-600">Subtotal ({itemCount()} items)</span>
          <span className="font-medium">{formatCurrency(subtotal)}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-secondary-600">Delivery Fee</span>
          <span className="font-medium">{formatCurrency(deliveryFee)}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-secondary-600">Tax</span>
          <span className="font-medium">{formatCurrency(tax)}</span>
        </div>
        
        <div className="border-t border-secondary-200 pt-3 mt-3 flex justify-between text-base font-medium">
          <span className="text-secondary-900">Total</span>
          <span className="text-primary-600">{formatCurrency(total)}</span>
        </div>
      </div>
      
      <Button 
        variant="primary" 
        fullWidth 
        className="mt-6"
        onClick={handleCheckout}
        icon={<ArrowRight className="h-4 w-4" />}
      >
        Proceed to Checkout
      </Button>
      
      <p className="text-xs text-secondary-500 mt-4 text-center">
        Delivery time may vary depending on your location
      </p>
    </div>
  );
};

export default CartSummary;