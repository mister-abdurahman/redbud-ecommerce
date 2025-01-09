"use client";
import { RadioGroupDemo } from "@/components/RadioGroupItem";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import paystack from "@/assets/images/paystack-wc.png";
import { useRouter, useSearchParams } from "next/navigation";
import React, { ReactNode, useContext } from "react";
import { MyContext } from "@/store/store";
import { CURRENCY } from "@/lib/constants";

function OrderDetails({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { cart, shippingAddress } = useContext(MyContext);

  // const searchParams = useSearchParams();
  // const dataAddress = searchParams.get("address");
  // const dataAddress = searchParams.get("price");

  // console.log("data", dataAddress);
  // console.log("data", dataPrice);

  const total = cart.reduce(
    (acc, curValue) => acc + curValue.price * curValue.quantity,
    0
  );

  return (
    <div className="basis-2/5">
      <h1 className="mb-3 text-xl font-semibold">Your order</h1>

      <div className="bg-blue-50 p-6 border-2 border-secondary rounded-md">
        <div className="flex justify-between font-bold">
          <h4>PRODUCT</h4>
          <p>SUBTOTAL</p>
        </div>
        <div className="border-t-2 border-b-2 border-secondary my-6 py-3 space-y-2">
          {cart.map((el, i) => (
            <div key={i} className="flex justify-between">
              <p className="mb-3 text-sm">
                {el.name} × {el.quantity}
              </p>
              <p>
                {CURRENCY}
                {el.price}
              </p>
            </div>
          ))}

          {/* <div className="flex justify-between">
            <p className="mb-3 text-sm">
              SOFTHEALTH Evening Primrose 1000mg *30 capsules × 1
            </p>
            <p>#7,500</p>
          </div> */}
          <div className="flex justify-between">
            <p className="mb-3 text-sm font-semibold">Subtotal</p>
            <p className="font-semibold text-red-500">
              {CURRENCY}
              {total}
            </p>
          </div>
        </div>

        <div className="border-b-2 border-secondary pb-3">
          <p className="mb-3">Shipping</p>
          {shippingAddress.address ? (
            <div className="flex justify-between gap-6">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id={shippingAddress.address}
                  name="location"
                  value={`${shippingAddress.address}&${shippingAddress.price}`}
                  readOnly
                  checked={true}
                />
                <label htmlFor={shippingAddress.address}>
                  {shippingAddress.address}
                </label>
              </div>
              {!shippingAddress.price ? (
                <p className="font-semibold">FREE</p>
              ) : (
                <p className="font-semibold">
                  {CURRENCY}
                  {shippingAddress.price}
                </p>
              )}
            </div>
          ) : null}

          {/* <RadioGroupDemo /> */}
        </div>

        <div className="flex justify-between text-2xl font-bold border-b-2 border-black pb-4">
          <h1 className="text-base">Total</h1>
          <p>
            {CURRENCY}
            {total + shippingAddress.price}
          </p>
        </div>

        <div className="flex flex-col gap-3 justify-center items-center my-3 w-full">
          <Image src={paystack} alt={`${paystack} image`} />

          <p className="text-gray-500 text-xs">
            Make payment using your debit and credit cards
          </p>
        </div>
      </div>
      {children}
      {/* <Button className="w-full mt-3">Place Order</Button> */}
    </div>
  );
}

export default OrderDetails;
