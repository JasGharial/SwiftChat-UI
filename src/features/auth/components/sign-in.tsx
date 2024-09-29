import { useState } from "react";
import { authenticateUser }from "../lib/login";
import { useToast } from "@/hooks/use-toast";
import { AxiosError } from "axios";
import { useNavigate } from "react-router";
import { useAppStore } from "@/store";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const defaultFormFields = {
  'email': '',
  'password': '',
}


const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
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

  const handleSigninSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const { data: response } = await authenticateUser(email, password);
      if (response.user) {
        resetFormFields();
        setUserInfo(response.user);
        if (response.user.profile_setup) navigate("/dashboard");
        else navigate("/profile")
      }
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        toast({title: "Validation Failed", description: error.response?.data?.message, variant: "destructive"});
      } else {
        toast({title: "Validation Failed", description: 'An unexpected error has occurred', variant: "destructive"});
      }
    }
  }

  return (
    <form className="p-1" onSubmit={handleSigninSubmit}>
      <Label htmlFor="email">Email</Label>
      <Input type="email" required onChange={handleChange} name="email" value={email} />

      <Label htmlFor="password">Password</Label>
      <Input type="password" required onChange={handleChange} name="password" value={password} />
      <br />
      <div className="buttons-container">
        <Button className="rounded-md w-full" type="submit">Log In</Button>
      </div>
    </form>
  )
}

export default SignIn;