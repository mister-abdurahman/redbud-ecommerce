"use client";
import React, { useContext, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { updateUserProfile } from "@/services/apiAuth";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { AuthContext } from "@/store/authStore";
import { IProfile } from "@/lib/types";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  first_name: z
    .string()
    .min(2, {
      message: "first name must be at least 2 characters.",
    })
    .max(50, {
      message: "first name must be at less than 50 characters.",
    }),
  last_name: z
    .string()
    .min(2, {
      message: "last name must be at least 2 characters.",
    })
    .max(50),
  country: z.string().min(2).max(50),
  street_address: z.string().min(2).max(50),
  city: z.string().min(2).max(50),
  state: z.string().min(2).max(50),
  phone_number: z
    .string({ message: "Enter a valid number" })
    .min(2)
    .max(20)
    .refine((val) => !isNaN(Number(val)), { message: "Must be a valid number" })
    .transform((val) => Number(val)),
  email: z.string().min(2).max(50).email(),
});

function ProfileForm({ defaultProfile }: { defaultProfile: IProfile }) {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  //   const [defaultProfile, setDefaultProfile] = useState<null | IProfile>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultProfile ?? {
      first_name: "",
      last_name: "",
      country: "",
      street_address: "",
      city: "",
      state: "",
      phone_number: 0,
      email: "",
    },
  });

  const {
    formState: { errors },
    register,
  } = form;

  if (user?.user?.aud !== "authenticated")
    return (
      <h1 className="text-xl font-semibold p-5">Login to access this page</h1>
    );

  async function onSubmitProfileForm(data: z.infer<typeof formSchema>) {
    setLoading(true);
    const adjusted = {
      id: user.user.id,
      first_name: data.first_name,
      last_name: data.last_name,
      country: data.country,
      street_address: data.street_address,
      city: data.city,
      state: data.state,
      phone_number: data.phone_number,
      email: data.email,
    };

    const res = await updateUserProfile(adjusted);

    if (res.success) {
      // alert(res.message);
      toast({
        title: "Updated Successfully",
        description: res.message,
      });
    } else {
      toast({
        title: "An error occured",
        description: res.error,
      });
      // alert(res.error);
    }
    setLoading(false);
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmitProfileForm)}>
      <div className="flex gap-2">
        <FormField
          control={form.control}
          name="first_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="First Name" {...field} />
              </FormControl>
              {errors.first_name && (
                <FormMessage>{errors.first_name.message}</FormMessage>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="last_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Last Name" {...field} />
              </FormControl>
              {errors.last_name && (
                <FormMessage>{errors.last_name.message}</FormMessage>
              )}
            </FormItem>
          )}
        />
      </div>
      <FormField
        control={form.control}
        name="phone_number"
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
            {errors.phone_number && (
              <FormMessage>{errors.phone_number.message}</FormMessage>
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
              <Input placeholder="Email" type="email" {...field} disabled />
            </FormControl>
            {errors.email && <FormMessage>{errors.email.message}</FormMessage>}
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="street_address"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Street Address</FormLabel>
            <FormControl>
              <Input placeholder="Street Address" {...field} />
            </FormControl>
            {errors.street_address && (
              <FormMessage>{errors.street_address.message}</FormMessage>
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
        <Button type="submit" disabled={loading}>
          {loading ? "Updating..." : "Update Profile"}
        </Button>
        {/* <SubmitButton pendingLabel="Updating">Update Profile</SubmitButton> */}
      </DialogFooter>
    </form>
  );
}

export default ProfileForm;
