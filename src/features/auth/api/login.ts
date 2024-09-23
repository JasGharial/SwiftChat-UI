import { api } from "@/lib/api-client";

export const signInWithEmailAndPassword = async (email: string, password: string) => {
  return await api.post("v1/auth/login", { email, password });
}
