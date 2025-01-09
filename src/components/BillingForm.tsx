"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// import { toast } from "@/components/hooks/use-toast"
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
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
import { useSearchParams } from "next/navigation";

const FormSchema = z.object({
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
  companyName: z.string().optional(),
  country: z.string().min(2).max(50),
  streetAddress: z.string().min(2).max(50),
  city: z.string().min(2).max(50),
  state: z.string().min(2).max(50),
  phoneNumber: z
    .string()
    .min(2)
    .max(20)
    .refine((val) => !isNaN(Number(val)), { message: "Must be a valid number" })
    .transform((val) => Number(val)),
  email: z.string().min(2).max(50).email(),
  otherNotes: z.string().optional(),
});

export function BillingForm() {
  const { cart, totalToPay } = useContext(MyContext);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      companyName: "",
      country: "",
      streetAddress: "",
      city: "",
      state: "",
      phoneNumber: 0,
      email: "",
      otherNotes: "",
    },
  });

  const {
    formState: { errors },
  } = form;

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    handlePayment(data.email, totalToPay);
  }

  return (
    <>
      <script src="https://js.paystack.co/v2/inline.js"></script>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex gap-6 py-4"
        >
          <div className="space-y-2 basis-3/5">
            <h1 className="mb-3 text-xl font-semibold">Billing details</h1>
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
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Company Name" {...field} />
                  </FormControl>
                  {errors.companyName && (
                    <FormMessage>{errors.companyName.message}</FormMessage>
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
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  {errors.email && (
                    <FormMessage>{errors.email.message}</FormMessage>
                  )}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="otherNotes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Other Notes</FormLabel>
                  <FormControl>
                    <Input placeholder="Other Notes" {...field} />
                  </FormControl>
                  {errors.otherNotes && (
                    <FormMessage>{errors.otherNotes.message}</FormMessage>
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
