import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface User {
  id: number;
  name: string;
  email: string;
  // Add more fields as needed
}

interface UserStore {
  user: User | null;
  setUser: (userData: User) => void;
  clearUser: () => void;
  clearStorage: () => void;
}

const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (userData) => set({ user: userData }),
      clearUser: () => set({ user: null }),
      clearStorage: () => {
        set({ user: null });
        localStorage.removeItem('user-storage');
      },
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useUserStore;
