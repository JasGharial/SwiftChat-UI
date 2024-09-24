import { signUpUserWithEmailAndPassword } from "../api/register";

export const authenticateUser = async (email: string, password: string, confirm_password: string) => {
  return await signUpUserWithEmailAndPassword(email, password, confirm_password);
}
