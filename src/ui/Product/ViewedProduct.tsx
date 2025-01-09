"use client";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { toast } from "@/hooks/use-toast";
import { CURRENCY } from "@/lib/constants";
import { IBrand, ICategory, IProduct } from "@/lib/types";
import { MyContext } from "@/store/store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

function ViewedProduct({
  product,
  brand,
}: {
  product: IProduct;
  brand: IBrand;
}) {
  const { addItemToCart, cart } = useContext(MyContext);
  const [quant, setQuant] = useState(1);
  const navigate = useRouter();

  function handleAddToCart() {
    const as = cart.find((a) => a.id === product.id);
    if (as)
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
      img_url: product.img_url,
      id: product.id,
      name: product.name,
      quantity: quant,
      price: product.price,
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
    // alert("Item added to cart");
  }

  return (
    <div className="p-8">
      <div className="flex flex-col sm:flex-row gap-4 sm:justify-center items-center">
        <div className="">
          <Image
            src={product.img_url}
            width={500}
            height={500}
            alt={`${product.name} photo`}
            className="sm:h-[20rem] h-[16rem] sm:w-[20rem] w-[16rem]"
          />
        </div>
        <div className="space-y-6 sm:basis-1/2">
          <div className="border-b border-gray-400">
            <h1 className="text-2xl font-semibold capitalize">
              {product.name}
            </h1>
            <p className="font-semibold text-xs text-blue-600">
              Brand: {brand.name}
            </p>
            <p className="font-semibold text-lg">
              {CURRENCY}
              {product.price}
            </p>
          </div>
          <span className="text-xs text-green-700">
            {product.status ? "Available" : "Out of Stock"}
          </span>

          <div className="space-y-2">
            <p className="text-sm">Quantity</p>
            <div className="flex gap-1 items-center">
              <Button
                variant="outline"
                onClick={() => {
                  setQuant((prev) => {
                    if (prev <= 1) return 1;
                    return prev - 1;
                  });
                }}
              >
                -
              </Button>
              <span className="border px-4 py-2 rounded-md">{quant}</span>
              <Button
                variant="outline"
                onClick={() => {
                  setQuant((prev) => prev + 1);
                }}
              >
                +
              </Button>
            </div>
          </div>

          <div className="flex sm:flex-row flex-col gap-3">
            <Button variant="light_blue" onClick={handleAddToCart}>
              Add to cart
            </Button>
            <Button>Proceed to checkout</Button>
          </div>

          <div>
            <h1>Share this product</h1>
            <div className="flex items-center gap-2">
              <FaXTwitter className="bg-blue-100 rounded-md p-2 w-9 h-9" />
              <FaFacebookF className="bg-blue-100 rounded-md p-2 w-9 h-9" />
              <IoLogoWhatsapp className="bg-blue-100 rounded-md p-2 w-9 h-9" />
            </div>
          </div>
        </div>
      </div>
      <div className="sm:mx-16 my-4 pb-5 sm:pb-10">
        <h1 className="text-xl font-bold mb-4">Description</h1>
        <p className="text-sm">{product.description}</p>
      </div>
    </div>
  );
}

export default ViewedProduct;
