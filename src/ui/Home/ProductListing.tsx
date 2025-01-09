import ProductCard from "@/components/ProductCard";
import VerifyPaymentUI from "@/components/VerifyPaymentUI";
import { IProduct } from "@/lib/types";
import { getProducts } from "@/services/apiProducts";
import { useSearchParams } from "next/navigation";
import React from "react";

async function ProductListing({ products }: { products: IProduct[] }) {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:gap-10 py-3 flex-wrap">
      <VerifyPaymentUI />
      {products.map((el, i) => (
        <ProductCard
          key={i}
          id={el.id}
          imageUrl={el.img_url}
          price={el.price}
          name={el.name}
          status={el.status}
        />
      ))}
    </div>
  );
}

export default ProductListing;
