import React from "react";
import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { signUp } from "@/services/apiAuth";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  firstName: z
    .string()
    .min(2, {
      message: "first name must be at least 2 characters.",
    })
    .max(50, {
      message: "first name must be at less than 50 characters.",
    }),
  lastName: z
    .string()
    .min(2, {
      message: "last name must be at least 2 characters.",
    })
    .max(50),
  country: z.string().min(2).max(50),
  streetAddress: z.string().min(2).max(50),
  password: z
    .string()
    .min(5, "Password must be at least 5 characters long")
    .max(64, "Password must be less than 65 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[@$!%*?&#]/, "Password must contain at least one special character")
    .nonempty("Password is required"),
  city: z.string().min(2).max(50),
  state: z.string().min(2).max(50),
  phoneNumber: z
    .string({ message: "Enter a valid number" })
    .min(2)
    .max(20)
    .refine((val) => !isNaN(Number(val)), { message: "Must be a valid number" })
    .transform((val) => Number(val)),
  email: z.string().min(2).max(50).email(),
});

function SignUpForm({ closeDialog, setToSIgnin }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      country: "",
      streetAddress: "",
      password: "",
      city: "",
      state: "",
      phoneNumber: 0,
      email: "",
    },
  });

  const {
    formState: { errors },
    register,
  } = form;

  async function onSubmitSignupForm(data: z.infer<typeof formSchema>) {
    const adjusted = {
      firstName: data.firstName,
      lastName: data.lastName,
      country: data.country,
      password: data.password,
      streetAddress: data.streetAddress,
      city: data.city,
      state: data.state,
      phoneNumber: data.phoneNumber,
      email: data.email,
    };

    const res = await signUp(adjusted);

    if (res.success) {
      toast({
        title: "Sign up Successfull",
        description: res.message,
      });
      toast({
        title: "Verify your email",
        description: `Kindly check your mail inbox and verify your email before you log in`,
      });
      // alert(res.message);
      // alert(
      //   "Kindly check your mail inbox and verify your email before you log in"
      // );
      setToSIgnin();
    } else {
      toast({
        title: "An error occured",
        description: res.error,
      });
      // alert(res.error);
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmitSignupForm)}>
      <div className="flex gap-2">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="First Name" {...field} />
              </FormControl>
              {errors.firstName && (
                <FormMessage>{errors.firstName.message}</FormMessage>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Last Name" {...field} />
              </FormControl>
              {errors.lastName && (
                <FormMessage>{errors.lastName.message}</FormMessage>
              )}
            </FormItem>
          )}
        />
      </div>
      <FormField
        control={form.control}
        name="phoneNumber"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Phone Number</FormLabel>
            <FormControl>
              <Input
                type="number"
                placeholder="Phone Number"
                // onChange={(e) => field.onChange(e.target.valueAsNumber)}
                {...field}
              />
            </FormControl>
            {errors.phoneNumber && (
              <FormMessage>{errors.phoneNumber.message}</FormMessage>
            )}
          </FormItem>
        )}
      />
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
      <FormField
        control={form.control}
        name="streetAddress"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Street Address</FormLabel>
            <FormControl>
              <Input placeholder="Street Address" {...field} />
            </FormControl>
            {errors.streetAddress && (
              <FormMessage>{errors.streetAddress.message}</FormMessage>
            )}
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="city"
        render={({ field }) => (
          <FormItem>
            <FormLabel>City</FormLabel>
            <FormControl>
              <Input placeholder="City" {...field} />
            </FormControl>
            {errors.city && <FormMessage>{errors.city.message}</FormMessage>}
          </FormItem>
        )}
      />
      <div className="flex gap-2">
        <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem>
              <FormLabel>State</FormLabel>
              <FormControl>
                <Input placeholder="State" {...field} />
              </FormControl>
              {errors.state && (
                <FormMessage>{errors.state.message}</FormMessage>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country</FormLabel>
              <FormControl>
                <Input placeholder="Country" {...field} />
              </FormControl>
              {errors.country && (
                <FormMessage>{errors.country.message}</FormMessage>
              )}
            </FormItem>
          )}
        />
      </div>
      <DialogFooter className="items-center gap-6 mt-6">
        <Button type="submit">Sign Up</Button>
        <p
          className="text-right text-primary text-sm underline cursor-pointer"
          onClick={setToSIgnin}
        >
          Already Registered.? Log in.
        </p>
      </DialogFooter>
    </form>
  );
}

export default SignUpForm;
