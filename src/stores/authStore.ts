import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  token: string | null;
  refreshToken: string | null;
  email: string | null;
  role: string | null;
  userId: string | null;
  expiresAt: string | null;
  setAuth: (data: {
    token: string;
    refreshToken: string;
    email: string;
    role: string;
    userId: string;
    expiresAt: string;
  }) => void;
  clearAuth: () => void;
  isAuthenticated: () => boolean;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      token: null,
      refreshToken: null,
      email: null,
      role: null,
      userId: null,
      expiresAt: null,

      setAuth: (data) =>
        set({
          token: data.token,
          refreshToken: data.refreshToken,
          email: data.email,
          role: data.role,
          userId: data.userId,
          expiresAt: data.expiresAt,
        }),

      clearAuth: () =>
        set({
          token: null,
          refreshToken: null,
          email: null,
          role: null,
          userId: null,
          expiresAt: null,
        }),

      isAuthenticated: () => !!get().token,
    }),
    {
      name: "auth-storage",
      storage: {
        getItem: (name) => {
          const value = sessionStorage.getItem(name);
          return value ? JSON.parse(value) : null;
        },
        setItem: (name, value) => sessionStorage.setItem(name, JSON.stringify(value)),
        removeItem: (name) => sessionStorage.removeItem(name),
      },
    }
  )
);