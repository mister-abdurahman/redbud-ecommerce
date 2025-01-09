"use client";
import { availableLocationsList, CURRENCY } from "@/lib/constants";
import { IAvailableLocation } from "@/lib/types";
import { useState } from "react";

export function RawRadioGroupDemo({
  locations,
  selectedValue,
  setSelectedValue,
}: {
  locations: IAvailableLocation;
  selectedValue: string;
  setSelectedValue: React.Dispatch<React.SetStateAction<string>>;
}) {
  // State to track the selected radio button
  //   const [selectedValue, setSelectedValue] = useState("Our Pickup store");
  // Handler for when the radio button changes

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="space-y-2">
      {/* First radio button */}
      <div className="flex justify-between gap-6">
        <div className="flex items-center space-x-2">
          <input
            type="radio"
            id="pickup-store"
            name="location"
            value="Our Pickup store&FREE"
            checked={selectedValue === "Our Pickup store&FREE"} // Ensure the radio is selected
            onChange={handleChange} // Handle state change on select
          />
          <label htmlFor="pickup-store">
            Pick up at our store (14, Ikeja mall, Along secretariat road, Lagos)
          </label>
        </div>
        <p className="font-semibold">FREE</p>
      </div>

      {locations.locations.map((el, i) => (
        <div key={i} className="flex justify-between gap-6">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id={el.address + i}
              name="location"
              value={`${el.address}&${el.price}`}
              checked={selectedValue === `${el.address}&${el.price}`} // Ensure the radio is selected
              onChange={handleChange} // Handle state change on select
            />
            <label htmlFor={el.address + i}>{el.address}</label>
          </div>
          <p className="font-semibold">
            {CURRENCY}
            {el.price}
          </p>
        </div>
      ))}
    </div>
  );
}
