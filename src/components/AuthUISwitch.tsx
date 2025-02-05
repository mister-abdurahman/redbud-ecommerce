"use client";
// import { isUserAuthenticated } from "@/services/apiAuth";
import { AuthContext } from "@/store/authStore";
import { AuthDialog } from "@/ui/Auth/AuthDialog";
import React, { useContext } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";

function AuthUISwitch() {
  const { user } = useContext(AuthContext);

  if (user?.user?.aud === "authenticated")
    return (
      <Link href={`/profile/${user?.user?.id}`}>
        <p className="hidden sm:block px-3 py-1 text-sm bg-primary rounded-full text-white">
          View Profile
        </p>
        <CgProfile className="block sm:hidden w-10 h-10 p-1 rounded-full bg-primary text-white" />
      </Link>
    );
  return <AuthDialog />;
}

export default AuthUISwitch;
