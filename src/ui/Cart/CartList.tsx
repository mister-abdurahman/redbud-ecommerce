"use client";
import AdjustQuantity from "@/components/AdjustQuantity";
import { Button } from "@/components/ui/button";
import { CURRENCY } from "@/lib/constants";
import { ICart } from "@/lib/types";
import { MyContext } from "@/store/store";
import Image from "next/image";
import React, { useContext } from "react";
import { MdCancel } from "react-icons/md";

function CartList() {
  const { cart, adjustQuantityOfAProduct, removeItemFromCart } =
    useContext(MyContext);
  return (
    <div className="sm:hidden flex flex-col gap-3">
      {cart.map((el, i) => (
        <CartItem key={i} item={el} />
      ))}
    </div>
  );
}

export default CartList;

export function CartItem({ item }: { item: ICart }) {
  const { adjustQuantityOfAProduct, removeItemFromCart } =
    useContext(MyContext);
  return (
    <div className="flex sm:hidden gap-4 sm:gap-7 items-center sm:p-4 p-4">
      <Image
        src={item.img_url}
        width={200}
        height={300}
        alt="product name"
        className="w-1/3"
      />
      <div className="flex flex-col">
        <p>{item.name}</p>
        <div>
          <span className="text-gray-600">Price:</span>{" "}
          <span className="font-semibold">
            {CURRENCY}
            {item.price}
          </span>
        </div>
        <div className="flex gap-2 items-center">
          {/* <span className="flex gap-8 items-center border border-gray-500 px-4 py-1">
            <p>-</p>
            <p>{item.quantity}</p>
            <p>+</p>
          </span> */}
          <AdjustQuantity
            quantity={item.quantity}
            id={item.id}
            adjustFn={adjustQuantityOfAProduct}
          />
          <MdCancel
            className="w-10 h-10 cursor-pointer"
            onClick={() => removeItemFromCart(item.id)}
          />
        </div>
        <div>
          <span className="text-gray-600">Total:</span>{" "}
          <span className="font-semibold">
            {CURRENCY}
            {item.price * item.quantity}
          </span>
        </div>
      </div>
    </div>
  );
}
