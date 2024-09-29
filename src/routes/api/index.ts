import { api } from "@/lib/api-client"

export const getUserInfo = async () => {
  return await api.get("v1/auth/user-info", {
    withCredentials: true
  })
}