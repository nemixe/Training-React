import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  id: string;
  name: string;
  email: string;
};

type AuthStore = {
  user: User | null;
  isLoggedIn: boolean;
  login: (user: any) => void;
  logout: () => void;
};

export const useAuthStore = create(
  persist<AuthStore>(
    (set) => ({
      user: null,
      isLoggedIn: false,
      login: (user) => {
        set({ user, isLoggedIn: true });
      },
      logout: () => {
        set({ user: null, isLoggedIn: false });
      },
    }),
    {
      name: "auth-store",
    },
  ),
);
