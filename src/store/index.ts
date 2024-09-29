import { create } from "zustand";
import { createAuthSlice } from "./slice/auth.slice";
import { iUser } from "@/types/user.type";

interface AuthState {
  userInfo: iUser | undefined;
  setUserInfo: (userInfo: iUser) => void;
}

export const useAppStore = create<AuthState>((set) => ({
  ...createAuthSlice(set),
}));
