import Image from "next/image";
import React from "react";
import category from "@/assets/images/category.jpeg";

function Categorys() {
  return (
    <div className="bg-green-100 rounded-md flex gap-2 justify-between p-6">
      <div className="flex flex-col items-center">
        <Image src={category} alt="Category Image" className="w-80 h-48" />
        <p className="text-xs">Health Supplies</p>
      </div>
      <div className="flex flex-col items-center">
        <Image src={category} alt="Category Image" className="w-80 h-48" />
        <p className="text-xs">Health Supplies</p>
      </div>
      <div className="flex flex-col items-center">
        <Image src={category} alt="Category Image" className="w-80 h-48" />
        <p className="text-xs">Health Supplies</p>
      </div>
      <div className="flex flex-col items-center">
        <Image src={category} alt="Category Image" className="w-80 h-48" />
        <p className="text-xs">Health Supplies</p>
      </div>
    </div>
  );
}

export default Categorys;
