import ProductCard from "@/components/ProductCard";
import VerifyPaymentUI from "@/components/VerifyPaymentUI";
import { IProduct } from "@/lib/types";
import { getProducts } from "@/services/apiProducts";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

async function ProductListing({ products }: { products: IProduct[] }) {
  if (products.length < 1)
    return (
      <h1 className="text-center mt-3">
        No Product Found, <Link href={"/products"}>See all Products</Link>
      </h1>
    );
  return (
    <div className="flex flex-col sm:flex-row items-center gap-10 py-3 flex-wrap">
      <VerifyPaymentUI />
      {products.map((el, i) => (
        <ProductCard
          key={i}
          id={el.id}
          img_url={el.img_url}
          price={el.price}
          name={el.name}
          status={el.status}
        />
      ))}
    </div>
  );
}

export default ProductListing;
