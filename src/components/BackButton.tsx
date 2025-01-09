"use client";
import React, { ReactNode } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

function BackButton() {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.back()}
      className="bg-blue-100 hover:bg-blue-200 text-black font-semibold hover:text-gray-800"
    >
      &larr; Back
    </Button>
  );
}

export default BackButton;
