"use client";
import { RadioGroupDemo } from "@/components/RadioGroupItem";
import { RawRadioGroupDemo } from "@/components/RawHtmlRadio";
import { SelectInput } from "@/components/SelectInput";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { availableLocationsList, CURRENCY } from "@/lib/constants";
import { countries, states } from "@/lib/helper";
import { MyContext } from "@/store/store";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

function ProductCalculation() {
  const router = useRouter();
  const { cart, setShippingAddress, setTotalToPay } = useContext(MyContext);
  const [selectedDelivery, setSelectedDelivery] = useState(
    "Our Pickup store&FREE"
  );
  const [country, setCountry] = useState("Nigeria");
  const [state, setState] = useState("Lagos");

  useEffect(
    function () {
      setTotalToPay(total + adjustedSelectedLocationPrice);
    },
    [cart, selectedDelivery]
  );

  const total = cart.reduce(
    (acc, curValue) => acc + curValue.price * curValue.quantity,
    0
  );

  const selectLocationsBasedOnState = availableLocationsList.find(
    (el) => el.state === state
  );

  const selectedLocationPrice = selectedDelivery.split("&")[1];
  const adjustedSelectedLocationPrice =
    selectedLocationPrice === "FREE" ? 0 : Number(selectedLocationPrice);

  function handleProceedToCheckout() {
    setShippingAddress({
      address: selectedDelivery.split("&")[0],
      price: adjustedSelectedLocationPrice,
    });
    router.push(`/checkout`);
  }

  if (!cart.length) return null;

  return (
    <div className="flex flex-col sm:flex-row gap-4 mx-4 justify-center">
      <div className="space-y-4">
        <h1 className="font-semibold">Couppon Discount</h1>
        <Input placeholder="Coupon code" />
        <Button variant="outline">Apply coupon</Button>
      </div>
      <div className="space-y-4">
        <h1 className="font-semibold"> Calculate Shipping </h1>
        <SelectInput
          value={country}
          setValue={setCountry}
          label="Select a Country"
          title="Country"
          options={countries}
        />
        {country == "Nigeria" ? (
          <SelectInput
            value={state}
            setValue={setState}
            label="Select a State"
            title="State"
            options={states}
          />
        ) : (
          <Input placeholder="State" />
        )}
        {/* <Input placeholder="town/city" /> */}
        {/* <div className="mx-auto">
          <Button variant="outline">Update</Button>
        </div> */}
      </div>
      <div className="flex flex-col basis-1/2 gap-2">
        <div className="bg-blue-50 p-6 border-2 border-secondary rounded-xl">
          <div className="flex justify-between">
            <h4>Subtotal</h4>
            <p>
              {CURRENCY}
              {total}
            </p>
          </div>
          <div className="border-t-2 border-b-2 border-secondary my-6 py-3">
            <p className="mb-3">Shipping</p>
            <RawRadioGroupDemo
              selectedValue={selectedDelivery}
              setSelectedValue={setSelectedDelivery}
              locations={selectLocationsBasedOnState}
            />
          </div>

          <div className="flex justify-between text-2xl font-bold">
            <h1>Total</h1>
            <p>
              {CURRENCY}
              {
                total + adjustedSelectedLocationPrice
                // (selectedLocationPrice == "FREE" ? selectedLocationPrice : 0)
              }
            </p>
          </div>
        </div>
        <Button onClick={handleProceedToCheckout}>Proceed to Checkout</Button>
      </div>
    </div>
  );
}

export default ProductCalculation;
