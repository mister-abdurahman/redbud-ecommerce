import Spinner from "@/components/Spinner";
import { getProfileById } from "@/services/apiProfile";
import ProfileForm from "@/ui/Profile/ProfileForm";
import React, { Suspense } from "react";

async function page({ params }) {
  const profileDetails = await getProfileById(params.id);
  return (
    <Suspense fallback={<Spinner />}>
      <ProfileForm defaultProfile={profileDetails} />
    </Suspense>
  );
}

export default page;
