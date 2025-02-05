"use client";

import Image from "next/image";
import React, { useContext } from "react";
import { Button } from "./ui/button";
import { MdShoppingCart } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { MyContext } from "@/store/store";
import { toast } from "@/hooks/use-toast";
import { ToastAction } from "./ui/toast";
import Link from "next/link";
import AdjustQuantity from "./AdjustQuantity";

interface IProps {
  img_url: string;
  name: string;
  price: number;
  id: number;
  status: boolean;
}

function ProductCard({ img_url, name, price, id, status }: IProps) {
  const navigate = useRouter();
  const { addItemToCart, cart, adjustQuantityOfAProduct } =
    useContext(MyContext);

  const itemInCart = cart.find((a) => a.id === id);

  function handleAddToCart() {
    if (itemInCart)
      return toast({
        title: "Item already in cart",
        description: "Want to go checkout ?",
        action: (
          <ToastAction
            onClick={() => navigate.push("/cart")}
            altText="Go to cart to checkout"
          >
            YES
          </ToastAction>
        ),
      });

    addItemToCart({
      name,
      price,
      quantity: 1,
      img_url,
      id,
    });
    toast({
      title: "Item added to cart",
      description: "Want to go checkout ?",
      action: (
        <ToastAction
          onClick={() => navigate.push("/cart")}
          altText="Go to cart to checkout"
        >
          YES
        </ToastAction>
      ),
    });
  }
  return (
    <div className="w-[14rem] h-[19rem] hover:shadow-xl flex flex-col rounded-md items-stretch relative group dark:text-white">
      {!status && (
        <span className="absolute top-3 left-3 bg-gray-300 rounded-md p-2 text-xs">
          Out of Stock
        </span>
      )}
      <Link href={`products/${id}`}>
        <Image
          alt="product image"
          src={img_url}
          objectFit="cover"
          objectPosition="center"
          width={200}
          height={200}
          className="w-full h-[14rem] aspect-square"
        />
      </Link>
      <div className="space-y-2 pt-2 pb-1 pl-2 border-t border-gray-400 ">
        <p className="text-[15px] font-bold">{name}</p>
        <p className="text-[13px]">₦{price}</p>
      </div>

      <div className="group-hover:flex sm:hidden flex">
        {/* <Button
          onClick={() => navigate.push(`/products/${id}`)}
          className="w-full mt-auto rounded-t-none text-black rounded-br-none rounded-bl-lg bg-blue-100 hover:bg-blue-300"
        >
          View <FaEye className="fill-black hover:fill-white" />
        </Button> */}
        {itemInCart ? (
          <div className="flex justify-center bg-secondary w-full">
            <AdjustQuantity
              adjustFn={adjustQuantityOfAProduct}
              quantity={itemInCart.quantity}
              id={itemInCart.id}
              iconStyle="rounded-none w-10 h-10"
              boxStyle="justify-between w-full"
            />
          </div>
        ) : (
          <Button
            disabled={!status}
            onClick={() => handleAddToCart()}
            className={`w-full mt-auto rounded-t-none rounded-bl-none rounded-br-lg ${
              !status && "cursor-not-allowed"
            }`}
          >
            Add to Cart <MdShoppingCart />
          </Button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
