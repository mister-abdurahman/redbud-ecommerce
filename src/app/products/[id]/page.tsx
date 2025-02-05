import React, { Suspense } from "react";
import BackButton from "@/components/BackButton";
import ViewedProduct from "@/ui/Product/ViewedProduct";
import Spinner from "@/components/Spinner";
import {
  getBrandById,
  getCategoryById,
  getProductById,
} from "@/services/apiProducts";
import PageContainer from "@/components/PageContainer";

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }) {
  const Product = await getProductById(+params.id);
  if (!Product?.name)
    return {
      title: "Redbud Gadgets Store",
    };

  return {
    title: `${Product.name}`,
  };
}

async function page({ params }: any) {
  const product = await getProductById(params.id);
  const brand = await getBrandById(product.brand_id);

  return (
    <PageContainer>
      <Suspense fallback={<Spinner />}>
        <ViewedProduct product={product} brand={brand} />
      </Suspense>
    </PageContainer>
  );
}

export default page;
