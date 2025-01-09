import React from "react";
import googlePixelPro from "@/assets/images/googlepixel10pro_01-r.png";
import oraimo from "@/assets/images/oraimo.png";
import headset from "@/assets/images/headset.png";
import Image from "next/image";

function ProductWidget() {
  return (
    <div className="flex flex-col sm:flex-row gap-2">
      <div className="bg-blue-100 flex justify-between items-center basis-1/2 p-8 rounded-md">
        <div className="flex flex-col gap-4">
          <p className="uppercase bg-secondary rounded-xl text-white w-fit p-2 text-xs">
            25% off
          </p>
          <h4 className="uppercase text-xl font-semibold">
            Google Pixel 10 Pro
          </h4>
          <p className="font-semibold">
            Bolder and Sleeker <br /> Google Pixel with AI assistant.
          </p>
          <span className="text-xs line-through">$998.00</span>
          <div className="flex gap-4 items-center">
            <h3 className="font-bold text-xl">$870.00</h3>
            <p className="text-xs">including tax</p>
          </div>
        </div>
        <Image src={googlePixelPro} className="w-1/3" alt="Product Image" />
      </div>
      <div className="flex flex-col basis-full sm:basis-1/2 gap-2">
        <div className="bg-green-100 basis-full sm:basis-1/2 flex justify-between items-center p-5">
          <div className="flex flex-col gap-4">
            <p className="uppercase bg-secondary rounded-xl text-white w-fit p-2 text-xs">
              25% off
            </p>
            <h4 className="uppercase text-xl font-semibold">
              Original Oraimo 3C earbuds
            </h4>
            <p className="font-semibold">
              More base and More Comfort <br /> With the Quality Oraimo Earpods.
            </p>
            <span className="text-xs line-through">$37.00</span>
            <div className="flex gap-4 items-center">
              <h3 className="font-bold text-xl">$37.00</h3>
              <p className="text-xs">including tax</p>
            </div>
          </div>
          <Image src={oraimo} className="w-1/3" alt="Product Image" />
        </div>
        <div className="bg-yellow-100 basis-full sm:basis-1/2 flex justify-between items-center p-5">
          <div className="flex flex-col gap-4">
            <p className="uppercase bg-secondary rounded-xl text-white w-fit p-2 text-xs">
              25% off
            </p>
            <h4 className="uppercase text-xl font-semibold">
              Armaggeddon Molotov3 Stereo Gaming Headset
            </h4>
            <p className="font-semibold">
              High sensitivity microphone, <br /> Comfortable and light
              cushioning.
            </p>
            <span className="text-xs line-through">$37.00</span>
            <div className="flex gap-4 items-center">
              <h3 className="font-bold text-xl">$37.00</h3>
              <p className="text-xs">including tax</p>
            </div>
          </div>
          <Image src={headset} className="w-1/3" alt="Product Image" />
        </div>
      </div>
    </div>
  );
}

export default ProductWidget;
