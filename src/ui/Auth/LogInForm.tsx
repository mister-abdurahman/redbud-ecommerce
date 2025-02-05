import React, { useContext } from "react";
import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { logIn, signUp } from "@/services/apiAuth";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { AuthContext } from "@/store/authStore";

const errorMessages = ["Email not confirmed", "Invalid login credentials"];

const formSchema = z.object({
  password: z
    .string()
    .min(5, "Password must be at least 5 characters long")
    .max(64, "Password must be less than 65 characters")
    .nonempty("Password is required"),
  email: z.string().min(2).max(50).email(),
});

function LoginForm({ closeDialog, setToSIgnUp }) {
  const { setUser } = useContext(AuthContext);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    formState: { errors },
    register,
  } = form;

  async function onSubmitLoginForm(data: z.infer<typeof formSchema>) {
    const adjusted = {
      email: data.email,
      password: data.password,
    };

    const res = await logIn(adjusted.email, adjusted.password);

    if (res.name == "AuthApiError") {
      return alert(res.message);
    } else {
      setUser(res)
      alert(`${res.user.email} is successfully signed in`);
      closeDialog();
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmitLoginForm)}>
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder="Email" type="email" {...field} />
            </FormControl>
            {errors.email && <FormMessage>{errors.email.message}</FormMessage>}
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input placeholder="Password" type="password" {...field} />
            </FormControl>
            {errors.password && (
              <FormMessage>{errors.password.message}</FormMessage>
            )}
          </FormItem>
        )}
      />
      <DialogFooter className="items-center gap-6 mt-6">
        <Button type="submit">Log In</Button>
        <p
          className="text-right text-primary text-sm underline cursor-pointer"
          onClick={setToSIgnUp}
        >
          Sign Up?
        </p>
      </DialogFooter>
    </form>
  );
}

export default LoginForm;
