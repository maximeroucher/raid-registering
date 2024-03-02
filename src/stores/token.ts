import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface TokenStore {
  token: string | null;
  setToken: (token: string) => void;
}

export const useTokenStore = create<TokenStore>()(
  devtools(
    persist(
      (set) => ({
        token: null,
        setToken: (token: string) => set({ token }),
      }),
      {
        name: "token-storage",
      }
    )
  )
);
