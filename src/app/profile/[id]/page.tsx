import Spinner from "@/components/Spinner";
import { getProfileById } from "@/services/apiProfile";
import ProfileForm from "@/ui/Profile/ProfileForm";
import React, { Suspense } from "react";

export async function generateMetadata({ params }) {
  const profile = await getProfileById(params.id);
  if (!profile.first_name)
    return {
      title: "Profile",
    };

  return {
    title: `${profile.first_name} ${profile.last_name}`,
  };
}

async function page({ params }) {
  const profileDetails = await getProfileById(params.id);
  return (
    <Suspense fallback={<Spinner />}>
      <ProfileForm defaultProfile={profileDetails} />
    </Suspense>
  );
}

export default page;
