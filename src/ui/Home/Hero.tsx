import Image from "next/image";
import React from "react";
import heroImage from "@/assets/images/hero_02.png";
import { Button } from "@/components/ui/button";
import { FaBagShopping } from "react-icons/fa6";
import Link from "next/link";

function Hero() {
  return (
    <div className="relative bg-heroImage sm:bg-none sm:bg-secondary w-full h-80">
      <div className="flex flex-col items-start absolute z-10 top-1/2 -translate-y-1/2 left-4">
        <h1 className="text-4xl font-semibold text-white sm:mb-1 mb-3">
          Your One-Stop <br className="block sm:hidden" /> Gadget Haven
        </h1>
        <p className="sm:block hidden w-1/2 text-white text-sm mb-3">
          Explore cutting-edge gadgets and accessories designed to make life
          smarter, faster, and more exciting. Shop now and experience the future
          of tech today!.
        </p>
        <Link href="/products">
          <Button variant="electric_blue" className="flex items-center">
            <FaBagShopping /> Start Shopping{" "}
          </Button>
        </Link>
      </div>
      <Image
        quality={100}
        src={heroImage}
        alt="Picture of doctor in pharmacy"
        className="hidden sm:block absolute top-1/2 -translate-y-1/2 right-4 w-[23rem]"
      />
    </div>
  );
}

export default Hero;
