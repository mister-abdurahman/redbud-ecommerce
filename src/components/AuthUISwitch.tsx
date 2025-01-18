"use client";
// import { isUserAuthenticated } from "@/services/apiAuth";
import { AuthContext } from "@/store/authStore";
import { AuthDialog } from "@/ui/Auth/AuthDialog";
import React, { useContext } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";

function AuthUISwitch() {
  // function AuthUISwitch({
  //   isAuthenticated,
  // }: {
  //   isAuthenticated: false | Session;
  // }) {
  const { user } = useContext(AuthContext);
  console.log("user session is:::::::", user);

  if (user?.user?.aud === "authenticated")
    return (
      <Button>
        <Link href={`/profile/${user?.user?.id}`}>
          <p className="hidden sm:block">View Profile</p>
          <CgProfile className="block sm:hidden" />
        </Link>
      </Button>
    );
  return <AuthDialog />;
}

export default AuthUISwitch;
