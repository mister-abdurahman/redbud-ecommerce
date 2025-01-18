"use client";
import { Button } from "@/components/ui/button";
import { HomeIcon, UserIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import React, { ReactNode, useContext } from "react";
import { FaCartPlus } from "react-icons/fa6";
import { AiFillProduct } from "react-icons/ai";
import { MdContactSupport, MdReviews } from "react-icons/md";
import { AuthContext } from "@/store/authStore";

// cart, order history, personal details, reviews, message support, items you'll love

function ProfileSideNavigation({ children }: { children: ReactNode }) {
  const pathName = usePathname();
  const { user } = useContext(AuthContext);

  const navLinks = [
    {
      name: "Personal Details",
      href: `/profile/${user?.user?.id}`,
      icon: <UserIcon className="h-5 w-5 text-primary-600" />,
    },
    {
      name: "Cart",
      href: "/profile/cart",
      icon: <FaCartPlus className="h-5 w-5 text-primary-600" />,
    },
    {
      name: "Your Orders",
      href: `/profile/${user?.user?.id}/orders`,
      icon: <AiFillProduct className="h-5 w-5 text-primary-600" />,
    },
    {
      name: "Reviews",
      href: `/profile/${user?.user?.id}/reviews`,
      icon: <MdReviews className="h-5 w-5 text-primary-600" />,
    },
    {
      name: "Message Support",
      href: "/whatsapp-link",
      icon: <MdContactSupport className="h-5 w-5 text-primary-600" />,
    },
  ];

  return (
    <nav className="border-r border-primary-900">
      <ul className="flex sm:flex-col flex-row sm:gap-2 gap-0 sm:h-full h-fit sm:text-lg text-xs">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              className={`py-3 sm:px-5 px-3 hover:bg-primary-800 hover:text-primary-100 ${
                pathName === link.href && "bg-gray-200"
              } transition-colors flex items-center sm:gap-4 gap-2 sm:flex-row flex-col font-semibold text-primary-200`}
              href={link.href}
            >
              {link.icon}
              <span>{link.name}</span>
            </a>
          </li>
        ))}
        {children}
      </ul>
    </nav>
  );
}

export default ProfileSideNavigation;
