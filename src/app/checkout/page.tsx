import { BillingForm } from "@/components/BillingForm";
import { RadioGroupDemo } from "@/components/RadioGroupItem";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import OrderDetails from "@/ui/Order/OrderDetails";
import BackButton from "@/components/BackButton";
import PageContainer from "@/components/PageContainer";

function page() {
  return (
    <PageContainer pageTitle="CHECKOUT">
      <BillingForm />
    </PageContainer>
  );
}

export default page;
