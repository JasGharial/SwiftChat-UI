import { useState } from "react";

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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSignupSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      console.log('Password and Confirm Password Mismatch')
      return;
    }


    // try {
    //   await authenticatUserWithEmailAndPassword(email, password)
    // } catch (error) {
    //   if(error.code === 'auth/invalid-credential'){
    //     alert('Incorrect Email/Password')
    //   }
    //   console.log("User Creation: An Error Has Occurred", error)
    // }
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
