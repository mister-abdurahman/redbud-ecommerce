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

  function handleKeyPressSearch(event) {
    if (event.key === "Enter") {
      if (searchValue.length < 2) return;
      router.push(`/products?search=${searchValue}`);
    }
  }

  return (
    <div className="sm:hidden flex basis-full relative">
      <Input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="w-full sm:text-base text-xs rounded-full border border-primary"
        placeholder="Search product name, category, brand..."
        onKeyDown={handleKeyPressSearch}
      />
      <Button onClick={handleSearch} className="bg-primary absolute right-0">
        <IoSearchOutline />
      </Button>
    </div>
  );
}

export default SmallSearchBox;
