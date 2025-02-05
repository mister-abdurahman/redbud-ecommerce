"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import OrderDetails from "@/ui/Order/OrderDetails";
import { useContext } from "react";
import { MyContext } from "@/store/store";
import { handlePayment } from "@/app/api/payment/paystackInteface";
import { IProfile } from "@/lib/types";

const FormSchema = z.object({
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
    .string()
    .min(2)
    .max(20)
    .refine((val) => !isNaN(Number(val)), { message: "Must be a valid number" })
    .transform((val) => Number(val)),
  email: z.string().min(2).max(50).email(),
});

export function BillingForm({ user_profile }: { user_profile?: IProfile }) {
  const { cart, totalToPay } = useContext(MyContext);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: user_profile ?? {
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
  } = form;

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    handlePayment(data.email, totalToPay);
  }

  return (
    <>
      {/* <script src="https://js.paystack.co/v2/inline.js"></script> */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex gap-6 py-4 sm:flex-row flex-col"
        >
          <div className="space-y-2 basis-full sm:basis-3/5">
            <h1 className="mb-3 text-xl font-semibold">Billing details</h1>
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
                  {errors.city && (
                    <FormMessage>{errors.city.message}</FormMessage>
                  )}
                </FormItem>
              )}
            />
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
              name="phone_number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Phone Number"
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
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  {errors.email && (
                    <FormMessage>{errors.email.message}</FormMessage>
                  )}
                </FormItem>
              )}
            />
          </div>
          <OrderDetails>
            <Button type="submit" className="w-full mt-2">
              Submit
            </Button>
          </OrderDetails>
        </form>
      </Form>
    </>
  );
}
