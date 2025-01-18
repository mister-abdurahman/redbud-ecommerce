import Image from "next/image";
import React from "react";
import customercare from "@/assets/images/customer_care.png";
import { FaPrescriptionBottleMedical } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { DialogDemo } from "@/components/PrescriptionModal";

function MakePrescription() {
  return (
    <div className="flex justify-between items-center p-8 bg-blue-100 sm:flex-row flex-col">
      <div className="space-y-3">
        <h1 className="text-3xl font-bold">Want to speak to us?!</h1>
        <p className="w-full sm:w-3/4 text-sm">
          Get in contact to a customer care and sort out any issues or enquiries
          you might have regarding our services or products. Theres always
          someone available to respond to you, so send a message today!.
        </p>
        <DialogDemo />
      </div>
      <Image
        src={customercare}
        alt="prescription image"
        className="w-1/3 order-first sm:order-last"
      />
    </div>
  );
}

export default MakePrescription;
