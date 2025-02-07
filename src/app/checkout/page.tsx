import { BillingForm } from "@/components/BillingForm";
import React, { Suspense } from "react";
import PageContainer from "@/components/PageContainer";
import { getProfileById } from "@/services/apiProfile";
import Spinner from "@/components/Spinner";
import Link from "next/link";

export const metadata = {
  title: "Checkout",
};

async function page({ searchParams }) {
  const resolvedQuery = await searchParams;
  const queryVal = resolvedQuery["id"];

  const userProfile = await getProfileById(queryVal);

  if (!userProfile)
    return (
      <h1>
        Check out Products to Purchase{" "}
        <Link href={"/products"} className="underline font-bold">
          HERE
        </Link>
      </h1>
    );
  return (
    <PageContainer pageTitle="CHECKOUT">
      <Suspense fallback={<Spinner />}>
        <BillingForm user_profile={userProfile} />
      </Suspense>
    </PageContainer>
  );
}

export default page;
