import PageContainer from "@/components/PageContainer";
import Spinner from "@/components/Spinner";
import { IProduct } from "@/lib/types";
import {
  getCategoryById,
  getProducts,
  getProductsByCategoryId,
  getProductsBySearch,
} from "@/services/apiProducts";
import ProductListing from "@/ui/Home/ProductListing";
import React, { Suspense } from "react";

export const metadata = {
  title: "Products",
};

async function page({ searchParams }) {
  let products: IProduct[];
  let categoryName: string;
  const resolvedQuery = await searchParams;
  const queryVal = resolvedQuery["search"];

  if (queryVal) {
    products = await getProductsBySearch(queryVal);
  } else {
    products = await getProducts();
  }

  return (
    <PageContainer pageTitle={`${categoryName ?? "PRODUCTS LIST"}`}>
      <Suspense fallback={<Spinner />}>
        <ProductListing products={products} />
      </Suspense>
    </PageContainer>
  );
}

export default page;
