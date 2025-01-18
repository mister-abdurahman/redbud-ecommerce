import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/Spinner";
import useProducts from "@/hooks/queries/useProducts";
import { MyContext } from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { MdShoppingCart } from "react-icons/md";
import { getProducts } from "@/services/apiProducts";
import { IProduct } from "@/lib/types";

async function ProductHighlight({
  heading,
  outerStyle,
  products,
}: {
  heading: string;
  outerStyle?: string;
  products: IProduct[];
}) {
  // const { isLoading, products, error } = useProducts();
  // const products = await getProducts();

  // if (error)
  //   return <h1 className="text-4xl">AN ERROR OCCURED: {error.message}</h1>;
  // if (isLoading) return <Spinner />;
  return (
    <div className={`pb-8 sm:pb-14 ${outerStyle}`}>
      <div className="flex justify-between mb-4">
        <h4 className="text-base font-bold">{heading}</h4>
        <p className="text-secondary text-sm">
          <Link href={"/products"}>View All &rarr;</Link>
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-6 flex-wrap items-center">
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
    </div>
  );
}

export default ProductHighlight;
