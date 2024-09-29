  import { iUser } from "@/types/user.type"

  // Create the auth slice
  export const createAuthSlice = (set: (userInfo: { userInfo: iUser }) => void) => ({
    userInfo: undefined as iUser | undefined,
    setUserInfo: (userInfo: iUser) => set({ userInfo }),
  });