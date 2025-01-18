import { BillingForm } from "@/components/BillingForm";
import React, { Suspense } from "react";
import PageContainer from "@/components/PageContainer";
import { getProfileById } from "@/services/apiProfile";
import Spinner from "@/components/Spinner";

async function page({ searchParams }) {
  const resolvedQuery = await searchParams;
  const queryVal = resolvedQuery["id"];

  const userProfile = await getProfileById(queryVal);
  return (
    <PageContainer pageTitle="CHECKOUT">
      <Suspense fallback={<Spinner />}>
        <BillingForm user_profile={userProfile} />
      </Suspense>
    </PageContainer>
  );
}

export default page;
