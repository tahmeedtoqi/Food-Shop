import React, { useState } from 'react';
import { Trash2, Plus, Minus, MessageSquare } from 'lucide-react';
import { CartItem as CartItemType } from '../../types';
import { formatCurrency } from '../../lib/utils';
import Button from '../ui/Button';
import { useCartStore } from '../../store/cartStore';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { menuItem, quantity, specialInstructions } = item;
  const [showInstructions, setShowInstructions] = useState(false);
  const [instructions, setInstructions] = useState(specialInstructions || '');
  
  const { updateQuantity, removeItem, updateInstructions } = useCartStore();

  const handleIncrease = () => {
    updateQuantity(menuItem.id, quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      updateQuantity(menuItem.id, quantity - 1);
    }
  };

  const handleRemove = () => {
    removeItem(menuItem.id);
  };

  const handleToggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  const handleInstructionsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInstructions(e.target.value);
  };

  const handleInstructionsBlur = () => {
    updateInstructions(menuItem.id, instructions);
  };

  return (
    <div className="flex flex-col border-b border-secondary-200 py-4">
      <div className="flex items-start">
        <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
          <img
            src={menuItem.image}
            alt={menuItem.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="ml-4 flex-1">
          <div className="flex justify-between">
            <h3 className="text-base font-medium text-secondary-900">
              {menuItem.name}
            </h3>
            <p className="text-base font-medium text-secondary-900">
              {formatCurrency(menuItem.price * quantity)}
            </p>
          </div>
          
          <p className="mt-1 text-sm text-secondary-500 line-clamp-1">
            {menuItem.description}
          </p>

          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center border rounded-md">
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={handleDecrease}
                disabled={quantity <= 1}
              >
                <Minus className="h-3 w-3" />
              </Button>
              <span className="px-2 text-secondary-900">{quantity}</span>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={handleIncrease}
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-secondary-500 hover:text-secondary-700"
                onClick={handleToggleInstructions}
                icon={<MessageSquare className="h-4 w-4" />}
              >
                {specialInstructions ? 'Edit' : 'Add'} Note
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-red-500 hover:text-red-700"
                onClick={handleRemove}
                icon={<Trash2 className="h-4 w-4" />}
              >
                Remove
              </Button>
            </div>
          </div>
        </div>
      </div>

      {showInstructions && (
        <div className="mt-3 ml-24">
          <textarea
            className="w-full rounded-md border border-secondary-300 px-3 py-2 text-sm placeholder:text-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Add special instructions..."
            rows={2}
            value={instructions}
            onChange={handleInstructionsChange}
            onBlur={handleInstructionsBlur}
          />
        </div>
      )}
    </div>
  );
};

export default CartItem;