"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: { message: string };
  reset: any;
}) {
  return (
    <main className="flex justify-center items-center flex-col gap-6 p-12">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-lg">{error.message}</p>

      <div className="flex justify-center gap-4">
        <Button
          variant="outline"
          onClick={reset}
          className="inline-block px-6 py-3"
        >
          Try again
        </Button>
        <Link
          href="/"
          className="inline-block bg-secondary text-white px-6 py-3 rounded-md"
        >
          Go To Home
        </Link>
      </div>
    </main>
  );
}
