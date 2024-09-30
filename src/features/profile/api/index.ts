import { api } from "@/lib/api-client";

export const updateProfile = async (first_name: string, last_name: string, color: number) => {
  return await api.post('/v1/auth/update-profile',
    { first_name, last_name, color },
    { withCredentials: true }
  )
}
