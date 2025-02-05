"use client";
import React, { useContext, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import img from "@/assets/images/banana cream.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MyContext } from "@/store/store";
import { MdCancel } from "react-icons/md";
import AdjustQuantity from "@/components/AdjustQuantity";
import Link from "next/link";
import { CURRENCY } from "@/lib/constants";

function CartTable() {
  const { cart, adjustQuantityOfAProduct, removeItemFromCart } =
    useContext(MyContext);

  function handleRemoveFromCart(id: number) {
    removeItemFromCart(id);
  }

  const total = cart.reduce(
    (acc, curValue) => acc + curValue.price * curValue.quantity,
    0
  );

  if (cart.length < 1)
    return (
      <p className="text-center font-semibold">
        No Items in cart,{" "}
        <Link className="underline text-secondary" href="/products">
          Click Here to Start Shopping
        </Link>
      </p>
    );

  return (
    <Table className="hidden sm:block table-auto mx-auto w-fit">
      <TableHeader className="bg-secondary">
        <TableRow className="">
          <TableHead className=""></TableHead>
          <TableHead className="">Product</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead className="text-right">Total</TableHead>
          <TableHead className=""></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cart.map((product) => (
          <TableRow key={product.name}>
            <TableCell className="font-medium">
              <Image
                src={product.img_url}
                height={100}
                width={100}
                alt={`${product.name} image`}
              />
            </TableCell>
            <TableCell className="capitalize">{product.name}</TableCell>
            <TableCell>{product.price}</TableCell>
            <TableCell>
              <AdjustQuantity
                adjustFn={adjustQuantityOfAProduct}
                quantity={product.quantity}
                id={product.id}
              />
            </TableCell>
            <TableCell className="text-right font-semibold">
              {product.price * product.quantity}
            </TableCell>
            <TableCell className="text-right">
              <MdCancel
                className="w-10 h-10 cursor-pointer fill-black"
                onClick={() => handleRemoveFromCart(product.id)}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow className="bg-primary text-white font-bold min-w-full">
          <TableCell colSpan={5}>Total</TableCell>
          <TableCell className="text-right">
            {CURRENCY}
            {total}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

export default CartTable;

// export function ProductQuantity({ unit }: { unit: number }) {
//   const [quant, setQuant] = useState(unit);

//   function increaseQuant() {
//     setQuant((prev) => prev + 1);
//   }

//   function decreaseQuant() {
//     setQuant((prev) => {
//       if (prev <= 1) return;
//       else return prev - 1;
//     });
//   }

//   return (
//     <div className="flex gap-1 items-center">
//       <Button variant="outline" onClick={() => decreaseQuant()}>
//         -
//       </Button>
//       <span className="border px-4 py-2 rounded-md">{quant}</span>
//       <Button variant="outline" onClick={() => increaseQuant()}>
//         +
//       </Button>
//     </div>
//   );
// }
