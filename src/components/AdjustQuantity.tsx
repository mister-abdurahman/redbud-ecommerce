import React from "react";
import { Button } from "./ui/button";
import { TiMinus } from "react-icons/ti";
import { FaPlus } from "react-icons/fa";

function AdjustQuantity({ adjustFn, quantity, id }) {
  return (
    <div className="flex gap-1 items-center">
      <Button variant="outline" onClick={() => adjustFn(id, false)}>
        <TiMinus />
      </Button>
      <span className="border px-4 py-2 rounded-md">{quantity}</span>
      <Button variant="outline" onClick={() => adjustFn(id, true)}>
        <FaPlus />
      </Button>
    </div>
  );
}

export default AdjustQuantity;
