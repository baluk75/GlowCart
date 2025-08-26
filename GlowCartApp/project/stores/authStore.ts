import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  
  login: async (email: string, password: string) => {
    // Mock authentication - accept any email/password combination
    const mockUser: User = {
      id: '1',
      name: email.split('@')[0],
      email,
    };
    
    set({
      isAuthenticated: true,
      user: mockUser,
    });
  },
  
  register: async (name: string, email: string, password: string) => {
    // Mock registration
    const mockUser: User = {
      id: Date.now().toString(),
      name,
      email,
    };
    
    set({
      isAuthenticated: true,
      user: mockUser,
    });
  },
  
  logout: () => {
    set({
      isAuthenticated: false,
      user: null,
    });
  },
}));