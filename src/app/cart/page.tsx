import Image from "next/image";
import React, { useContext, useState } from "react";
import img from "@/assets/images/garlic.png";
import { Button } from "@/components/ui/button";
import CartTable from "@/ui/Cart/CartTable";
import CartList from "@/ui/Cart/CartList";
import ProductCalculation from "@/ui/Cart/ProductCalculation";
import PageContainer from "@/components/PageContainer";

async function page() {
  return (
    <PageContainer pageTitle="CART">
      <div className="p-3 sm:p-8 border-b border-gray-500 pb-6">
        <CartList />
        <CartTable />
      </div>
      <div className="w-full mx-auto">
        <Button className="my-6 mx-4 w-fit">Continue Shopping</Button>
      </div>
      <ProductCalculation />
    </PageContainer>
  );
}

export default page;
