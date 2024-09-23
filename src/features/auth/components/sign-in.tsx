import { useState } from "react";
import { authenticateUser }from "../lib/login";

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
      await authenticateUser(email, password);
    } catch (error) {
      console.log("User Authentication Failed", error)
    }
    resetFormFields();
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