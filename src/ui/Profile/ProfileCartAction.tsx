"use client";
import { Button } from "@/components/ui/button";
import { MyContext } from "@/store/store";
import Link from "next/link";
import React, { useContext } from "react";

function ProfileCartAction() {
  const { cart } = useContext(MyContext);
  if (cart.length)
    return (
      <div className="flex gap-4">
        <Link href={"/products"}>
          <Button variant="outline">Continue Shopping</Button>
        </Link>
        <Link href={"/cart"}>
          <Button>Prepare To Checkout</Button>
        </Link>
      </div>
    );
  else {
    return null;
  }
}

export default ProfileCartAction;
