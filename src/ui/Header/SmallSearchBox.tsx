"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

function SmallSearchBox() {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");

  function handleSearch() {
    if (searchValue.length < 2) return;
    router.push(`/products?search=${searchValue}`);
  }

  return (
    <div className="sm:hidden flex basis-full bg-slate-100 rounded-md border border-gray-300 relative">
      <Input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="w-full sm:text-base text-xs"
        placeholder="Search product name, category, brand..."
      />
      <Button
        onClick={handleSearch}
        variant="default"
        className="bg-green-600 absolute right-0"
      >
        <IoSearchOutline />
      </Button>
    </div>
  );
}

export default SmallSearchBox;
