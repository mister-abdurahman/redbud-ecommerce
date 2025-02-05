"use client";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CURRENCY } from "@/lib/constants";
import { FormEventHandler, useState } from "react";

interface ILocation {
  state: string;
  address: string;
  price: number;
}

export function RadioGroupDemo({
  availableLocations,
}: {
  availableLocations: { state: string; address: string; price: number }[];
}) {
  const [s, setS] = useState("Our Pickup store");

  const handleChange = (event: any) => {
    setS(event.target.value);
  };
  return (
    <RadioGroup>
      <div className="flex justify-between">
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value={"Our Pickup store"}
            id={`r${0}`}
            checked={s === "Our Pickup store"}
            onChange={handleChange}
          />
          <Label htmlFor={`r${0}`}>
            Pick up at our store (14, Ikeja mall, Along secretariat road, Lagos)
          </Label>
        </div>
        <p className="font-semibold">FREE</p>
      </div>

      <div className="flex justify-between">
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value={"Our Second Pickup store"}
            id={`r${1}`}
            checked={s === "Our Second Pickup store"}
            onChange={handleChange}
          />
          <Label htmlFor={`r${1}`}>
            Pick up at our second store (15, Ikeja mall, Along secretariat road,
            Lagos)
          </Label>
        </div>
        <p className="font-semibold">FREEer</p>
      </div>
    </RadioGroup>
  );
}
