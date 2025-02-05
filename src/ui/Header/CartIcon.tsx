"use client";
import { MyContext } from "@/store/store";
import Link from "next/link";
import React, { useContext } from "react";
import { FaCartPlus } from "react-icons/fa6";

function CartIcon() {
  const { cart } = useContext(MyContext);
  return (
    <div className="relative">
      <Link href={"/cart"}>
        <FaCartPlus className="w-7 h-7 cursor-pointer fill-primary dark:fill-blue-100" />
        {cart.length ? (
          <span className="bg-secondary text-primary px-2 rounded-full text-sm absolute left-4 top-4">
            {cart.length}
          </span>
        ) : null}
      </Link>
    </div>
  );
}

export default CartIcon;
