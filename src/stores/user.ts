import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { CoreUser } from "../api/hyperionSchemas";

interface UserStore {
  user?: CoreUser;
  setUser: (user?: CoreUser) => void;
}

export const useUserStore = create<UserStore>()(
  devtools(
    persist(
      (set) => ({
        user: undefined,
        setUser: (user?: CoreUser) => {
          set({ user: user });
        },
      }),
      {
        name: "raid-user-storage",
      }
    )
  )
);
