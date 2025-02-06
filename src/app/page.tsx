import Header from "@/components/Header";
import Spinner from "@/components/Spinner";
import { getProductsByTag } from "@/services/apiProducts";
import Hero from "@/ui/Home/Hero";
import MakePrescription from "@/ui/Home/MakePrescription";
import OfferCards from "@/ui/Home/OfferCards";
import ProductHighlight from "@/ui/Home/ProductHighlight";
import ProductWidget from "@/ui/Home/ProductWidget";
import Stats from "@/ui/Home/Stats";
import React, { Suspense } from "react";

export default async function Page() {
  const popularProducts = await getProductsByTag("popular");
  const newProducts = await getProductsByTag("new");

  return (
    <div className="">
      <Hero />
      <div className="mx-10">
        <OfferCards />
        <Suspense fallback={<Spinner />}>
          <ProductHighlight
            products={popularProducts.slice(0, 5)}
            heading="Popular Products"
          />
        </Suspense>

        <Suspense fallback={<Spinner />}>
          <ProductHighlight
            products={newProducts.slice(0, 5)}
            outerStyle="mt-6 sm:mt-0"
            heading="New Products"
          />
        </Suspense>
        <ProductWidget />
        <Stats />
      </div>
      <MakePrescription />
    </div>
  );
}
