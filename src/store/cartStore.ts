import { create } from 'zustand';
import { CartItem, MenuItem } from '../types';

interface CartState {
  items: CartItem[];
  addItem: (item: MenuItem, quantity?: number, specialInstructions?: string) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  updateInstructions: (itemId: string, instructions: string) => void;
  clearCart: () => void;
  itemCount: () => number;
  totalPrice: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  
  addItem: (menuItem, quantity = 1, specialInstructions = '') => {
    set((state) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.menuItem.id === menuItem.id
      );

      if (existingItemIndex > -1) {
        // Item exists, update quantity
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + quantity,
        };
        return { items: updatedItems };
      } else {
        // Item doesn't exist, add it
        return {
          items: [
            ...state.items,
            { menuItem, quantity, specialInstructions },
          ],
        };
      }
    });
  },

  removeItem: (itemId) => {
    set((state) => ({
      items: state.items.filter((item) => item.menuItem.id !== itemId),
    }));
  },

  updateQuantity: (itemId, quantity) => {
    set((state) => ({
      items: state.items.map((item) =>
        item.menuItem.id === itemId
          ? { ...item, quantity: Math.max(1, quantity) }
          : item
      ),
    }));
  },

  updateInstructions: (itemId, instructions) => {
    set((state) => ({
      items: state.items.map((item) =>
        item.menuItem.id === itemId
          ? { ...item, specialInstructions: instructions }
          : item
      ),
    }));
  },

  clearCart: () => set({ items: [] }),

  itemCount: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  },

  totalPrice: () => {
    return get().items.reduce(
      (total, item) => total + item.menuItem.price * item.quantity,
      0
    );
  },
}));