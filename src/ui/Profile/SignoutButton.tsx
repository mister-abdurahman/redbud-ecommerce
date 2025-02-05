"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "@/services/apiAuth";
import { AuthContext } from "@/store/authStore";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { CiLogin } from "react-icons/ci";
// import SignoutClientButton from "./SignoutClientButton";

function SignoutButton() {
  const { user, setUser } = useContext(AuthContext);
  const router = useRouter();

  async function handleLogout() {
    await signOut();
    alert(`${user.user.email} signed out successfully`);
    router.push("/");
    setUser(null);

    // setTimeout(() => {
    //     return setUser(null);
    // }, 500);
  }

  return (
    <li>
      <Button
        variant="outline"
        onClick={handleLogout}
        className={`py-3 sm:px-5 px-3 hover:bg-primary-800 hover:text-primary-100 transition-colors flex items-center sm:gap-4 gap-2 flex-row font-semibold text-primary-200`}
      >
        <CiLogin /> Log out
      </Button>
    </li>
  );
}

export default SignoutButton;
