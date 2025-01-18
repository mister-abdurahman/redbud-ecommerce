import ProfileSideNavigation from "@/ui/Profile/ProfileSideNavigation";
import SignoutButton from "@/ui/Profile/SignoutButton";
import React, { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <div className="p-4 grid sm:grid-cols-[16rem_1fr] grid-cols-1 sm:grid-rows-1 grid-rows-[3rem_1fr] sm:gap-12 gap-9 h-full">
      <ProfileSideNavigation>
        <SignoutButton />
      </ProfileSideNavigation>
      <div className="py-1">{children}</div>
    </div>
  );
}

export default layout;
