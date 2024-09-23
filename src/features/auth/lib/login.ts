import { signInWithEmailAndPassword } from "../api/login";

export const authenticateUser = async (email: string, password: string) => {
  return await signInWithEmailAndPassword(email, password);
}
