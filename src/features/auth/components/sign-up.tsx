import { useState } from "react";
import { ValidateEmail } from "@/utils/validation.utils";
import { useNavigate } from "react-router";
import { AxiosError } from "axios";
import { useAppStore } from "@/store";

import { signUpUserWithEmailAndPassword } from "../api/register";
import { useToast } from "@/hooks/use-toast";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const defaultFormFields = {
  'email': '',
  'password': '',
  'confirmPassword': ''
}

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password, confirmPassword } = formFields;
  const { toast } = useToast();
  const navigate = useNavigate();
  const { setUserInfo } = useAppStore();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSignupSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!ValidateEmail(email)) {
      toast({title: "Validation Failed", description: "Please enter a valid format of email", variant: "destructive"});
      return;
    }

    if (password !== confirmPassword) {
      toast({title: "Validation Failed", description: "Password and Confirm Password Mismatch", variant: "destructive"});
      return;
    }

    try {
      const { data: response } = await signUpUserWithEmailAndPassword(email, password, confirmPassword);
      if (response.user) {
        setUserInfo(response.user);
        navigate("/profile");
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        toast({title: "Validation Failed", description: error.response?.data?.message, variant: "destructive"});
      } else {
        toast({title: "Validation Failed", description: 'An unexpected error has occurred', variant: "destructive"});
      }
    }
    resetFormFields();
  }

  return (
    <form className="p-1" onSubmit={handleSignupSubmit}>
      <Label htmlFor="email">Email</Label>
      <Input type="email" required onChange={handleChange} name="email" value={email} />

      <Label htmlFor="password">Password</Label>
      <Input type="password" required onChange={handleChange} name="password" value={password} />

      <Label htmlFor="confirmPassword">Confirm Password</Label>
      <Input type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />
      <br />
      <div className="buttons-container">
        <Button className="rounded-md w-full" type="submit">Sign Up</Button>
      </div>
    </form>
  )
}

export default SignUp;
