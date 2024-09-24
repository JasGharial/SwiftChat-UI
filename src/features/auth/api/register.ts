import { api } from "@/lib/api-client";

export const signUpUserWithEmailAndPassword = async (email: string, password: string, confirm_password: string) => {
  return await api.post("v1/auth/register", { email, password, confirm_password });
}
