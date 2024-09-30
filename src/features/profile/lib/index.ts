import { updateProfile } from "../api"

export const updateUserProfile = async (first_name: string, last_name: string, color: number) => {
  return await updateProfile(first_name, last_name, color)
}
