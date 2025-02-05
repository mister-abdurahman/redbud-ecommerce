"use client";
import React, { ReactNode } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

function BackButton() {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.back()}
      variant="secondary"
      className="font-semibold"
    >
      &larr; Back
    </Button>
  );
}

export default BackButton;
