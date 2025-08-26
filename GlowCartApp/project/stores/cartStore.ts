import { create } from 'zustand';
import { Product } from '@/types/Product';

interface CartItem {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
  getItemQuantity: (productId: number) => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  
  addToCart: (product: Product, quantity = 1) => {
    set((state) => {
      const existingItem = state.items.find(item => item.id === product.id);
      
      if (existingItem) {
        return {
          items: state.items.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        };
      }
      
      return {
        items: [...state.items, {
          id: product.id,
          title: product.title,
          price: product.price,
          thumbnail: product.thumbnail,
          quantity,
        }],
      };
    });
  },
  
  removeFromCart: (productId: number) => {
    set((state) => ({
      items: state.items.filter(item => item.id !== productId),
    }));
  },
  
  updateQuantity: (productId: number, quantity: number) => {
    if (quantity <= 0) {
      get().removeFromCart(productId);
      return;
    }
    
    set((state) => ({
      items: state.items.map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      ),
    }));
  },
  
  clearCart: () => {
    set({ items: [] });
  },
  
  getTotalPrice: () => {
    const { items } = get();
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  },
  
  getTotalItems: () => {
    const { items } = get();
    return items.reduce((total, item) => total + item.quantity, 0);
  },
  
  getItemQuantity: (productId: number) => {
    const { items } = get();
    const item = items.find(item => item.id === productId);
    return item ? item.quantity : 0;
  },
}));