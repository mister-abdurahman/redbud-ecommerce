"use client";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CURRENCY } from "@/lib/constants";
import { useState } from "react";

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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(value);
    setS(event.target.value);
  };
  return (
    <RadioGroup
    // defaultValue="Our Pickup store"
    // value={s}
    // onChange={handleChange}
    >
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

// <div>
//   <div>
//     <input
//       type="radio"
//       id="huey"
//       name="drone"
//       value="huey"
//       onChange={(e) => handleChange(e.currentTarget.value)}
//     />
//     <label htmlFor="huey">Huey</label>
//   </div>

//   <div>
//     <input
//       type="radio"
//       id="dewey"
//       name="drone"
//       value="dewey"
//       onChange={(e) => handleChange(e.currentTarget.value)}
//     />
//     <label htmlFor="dewey">Dewey</label>
//   </div>
// </div>

{
  /* {availableLocations.map((el, i) => (
  <div key={i} className="flex justify-between">
    <div className="flex items-center space-x-2">
      <RadioGroupItem value={el.address} id={`r${i + 1}`} />
      <Label htmlFor={`r${i + 1}`}>{el.address}</Label>
    </div>
    <p className="font-semibold">
      {CURRENCY}
      {el.price}
    </p>
  </div>
))} */
}
