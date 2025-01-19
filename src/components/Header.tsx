import Image from "next/image";
import React, { useContext } from "react";
import { Input } from "./ui/input";
import aspire from "@/assets/images/pharmacy-logo_1.png";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { IoSearchOutline } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa6";
import { MdAddIcCall, MdDarkMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "./ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MyContext, MyContextProvider } from "@/store/store";
import CartIcon from "@/ui/Header/CartIcon";
import { getCategorys } from "@/services/apiProducts";
import CategoryList from "@/ui/Header/CategoryList";
import SearchBox from "@/ui/Header/SearchBox";
import SmallSearchBox from "@/ui/Header/SmallSearchBox";
import { SidebarTrigger } from "./ui/sidebar";
import { LOGO } from "@/lib/constants";
import DarkModeToggler from "@/ui/Header/DarkModeToggler";
import { AuthDialog } from "@/ui/Auth/AuthDialog";
import AuthUISwitch from "./AuthUISwitch";
// import { isUserAuthenticated } from "@/services/apiAuth";

async function Header() {
  const categories = await getCategorys();
  // const isAuthenticated = await isUserAuthenticated();
  return (
    <header className="px-3 sm:px-8 dark:bg-slate-700">
      <div className="flex items-center justify-between py-2">
        <figure>
          <Link href={"/"}>
            <Image src={LOGO} alt="logo image" className="w-40 h-16" />
          </Link>
        </figure>
        <SearchBox />
        <div className="flex gap-5 items-center">
          <CartIcon />
          <MdAddIcCall className="w-6 h-6 fill-secondary" />

          <AuthUISwitch />
          {/* <AuthUISwitch isAuthenticated={isAuthenticated} /> */}
          {/* <Button className="hidden sm:block">Login/Register</Button> */}
          <DarkModeToggler />
        </div>
      </div>
      <div className="flex items-center sm:hidden justify-between gap-6">
        <SidebarTrigger />
        <SmallSearchBox />
      </div>
      <CategoryList list={categories} />
    </header>
  );
}

export default Header;
