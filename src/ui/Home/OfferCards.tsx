import React from "react";
import { IconType } from "react-icons";
import { BsCapsulePill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";

function OfferCards() {
  return (
    <div className="flex my-4 flex-col gap-3 sm:flex-row items-center sm:items-start justify-center sm:justify-between">
      {/* <div className="bg-teal-300 rounded-xl p-2 w-fit grid grid-cols-5">
        <BsCapsulePill className="row-span-2 w-12 h-12" />
        <p>Reliable</p>
        <p className="col-start-2 col-span-3">
          Varieties of authentic products
        </p>
      </div> */}
      <EachCard
        Icon={BsCapsulePill}
        IconStyle="w-7 h-7"
        p1="Reliable"
        p2="Varieties of authentic products"
        color="bg-green-300"
      />
      <EachCard
        Icon={TbTruckDelivery}
        IconStyle="w-7 h-7"
        p1="Fast Delivery"
        p2="Swift nationwide deivery"
        color="bg-rose-300"
      />
      <EachCard
        Icon={MdSecurity}
        IconStyle="w-7 h-7"
        p1="Secure Payment"
        p2="Highly secured payment systems"
        color="bg-zinc-300"
      />
      <EachCard
        Icon={MdOutlineSupportAgent}
        IconStyle="w-7 h-7"
        p1="24/7 Support"
        p2="Always on Customer Support"
        color="bg-blue-300"
      />
    </div>
  );
}

export default OfferCards;

interface EachProps {
  Icon: IconType;
  p1: string;
  p2: string;
  color: string;
  IconStyle?: string;
}
function EachCard({ Icon, p1, p2, color, IconStyle }: EachProps) {
  return (
    <div className={`rounded-xl p-3 w-full flex gap-4 items-center ${color}`}>
      {/* <BsCapsulePill className="row-span-2 w-7 h-7" /> */}
      <Icon className={IconStyle} />
      <div>
        <p className="font-bold">{p1}</p>
        <p className="text-sm">{p2}</p>
      </div>
      <IoIosArrowForward className="ml-auto" />
    </div>
  );
}
