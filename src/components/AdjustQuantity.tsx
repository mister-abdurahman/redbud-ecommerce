"use client";

import React from "react";
import { Button } from "./ui/button";
import { TiMinus } from "react-icons/ti";
import { FaPlus } from "react-icons/fa";

function AdjustQuantity({
  adjustFn,
  quantity,
  id,
  iconStyle = "",
  boxStyle = "",
}) {
  return (
    <div className={`flex gap-3 items-center ${boxStyle}`}>
      <TiMinus
        className={`bg-primary rounded-full w-8 h-8 p-2 fill-secondary ${iconStyle}`}
        onClick={() => adjustFn(id, false)}
      />
      <span className="px-4 py-2">{quantity}</span>
      <FaPlus
        className={`bg-primary rounded-full w-8 h-8 p-2 fill-secondary ${iconStyle}`}
        onClick={() => adjustFn(id, true)}
      />
    </div>
  );
}

export default AdjustQuantity;
