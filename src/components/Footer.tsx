import React from "react";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt, FaLinkedinIn } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { RiFacebookFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="mt-auto px-8 sm:px-12 pt-6 sm:pt-12 pb-7 text-sm bg-secondary text-white flex flex-col gap-8">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 sm:justify-between">
        <div>
          <h1 className="font-semibold mb-2 sm:mb-3">Contact</h1>
          <div className="space-y-1 sm:space-y-2">
            <p className="text-xs flex items-center gap-1">
              <IoLocation />
              123, Alausa Scretariat, Ikeja, Lagos, Nigeria
            </p>
            <p className="text-xs flex items-center gap-1">
              {" "}
              <FaPhoneAlt /> 0900000000000
            </p>
            <p className="text-xs flex items-center gap-1">
              {" "}
              <IoIosMail className="w-4 h-4" /> support@redbudpay.com
            </p>
          </div>
        </div>
        <div>
          <h1 className="font-semibold mb-2 sm:mb-3">Customer Service</h1>
          <div className="space-y-1 sm:space-y-2">
            <p className="text-xs">FAQs</p>
            <p className="text-xs">Shipping</p>
            <p className="text-xs">My Account</p>
            <p className="text-xs">Get Support</p>
          </div>
        </div>
        <div>
          <h1 className="font-semibold mb-2 sm:mb-3">Specialities</h1>
          <div className="space-y-1 sm:space-y-2">
            <p className="text-xs">Swift Delivery</p>
            <p className="text-xs">Quality Products</p>
            <p className="text-xs">Good warranty</p>
            <p className="text-xs">Transparent Deals</p>
          </div>
        </div>
        <div>
          <h1 className="font-semibold mb-2 sm:mb-3">Social Media</h1>
          <div className="flex gap-3">
            <span className="border-2 border-white rounded-full p-2">
              <RiFacebookFill className="w-4 sm:w-5 h-4 sm:h-5" />
            </span>
            <span className="border-2 border-white rounded-full p-2">
              <FaLinkedinIn className="w-4 sm:w-5 h-4 sm:h-5" />
            </span>
            <span className="border-2 border-white rounded-full p-2">
              <FaXTwitter className="w-4 sm:w-5 h-4 sm:h-5" />
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center border-t-[.1px] border-gray-600 pt-4 text-xs">
        <p>© 2025 Redbudpay. All reserved.</p>
        <div className="flex gap-4">
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
