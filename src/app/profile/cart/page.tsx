import CartTable from "@/ui/Cart/CartTable";
import ProfileCartAction from "@/ui/Profile/ProfileCartAction";
import React from "react";

export const metadata = {
  title: "Cart",
};

async function page() {
  return (
    <div className="flex flex-col gap-6 items-center py-4">
      <CartTable />
      <ProfileCartAction />
    </div>
  );
}

export default page;
