"use client";
import { toast } from "@/hooks/use-toast";
import { createOrder } from "@/services/apiOrders";
import { AuthContext } from "@/store/authStore";
import { MyContext } from "@/store/store";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useContext, useEffect, useRef } from "react";

const API_KEY = process.env.NEXT_PUBLIC_PAYSTACK_TEST_SECRET_KEY;

function VerifyPaymentUI() {
  const searchParams = useSearchParams();
  const hasRan = useRef(false);
  const router = useRouter();
  const reference = searchParams.get("reference");
  const {
    cart,
    setCart,
    totalToPay,
    setShippingAddress,
    setTotalToPay,
    shippingAddress,
  } = useContext(MyContext);
  const { user } = useContext(AuthContext);

  // check where i am sending the initial post api, i am doing some amount manipulation there.

  useEffect(function () {
    if (hasRan.current) return;
    hasRan.current = true;
    reference
      ? fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
        })
          .then((res) => res.json())
          .then(async (data) => {
            console.log("verification result:", data, "total:", totalToPay);
            if (data.status && data.data.amount == totalToPay * 100) {
              user &&
                (await createOrder(
                  {
                    user_id: user?.user?.id,
                    status: true,
                    total_amount: totalToPay,
                    shipping_address: shippingAddress.address,
                  },
                  cart
                ));
              localStorage.setItem("cart", JSON.stringify([]));
              localStorage.setItem("totalToPay", JSON.stringify(0));
              localStorage.setItem("shippingAddress", JSON.stringify(null));
              setCart([]);
              setShippingAddress(null);
              setTotalToPay(0);
              router.replace("/products"); //not tested yet
              return toast({
                title: "Payment Confirmed",
                description:
                  "Your payment has been confirmed and your order is processing...",
              });
            } else {
              user &&
                createOrder(
                  {
                    user_id: user?.user?.id,
                    status: false,
                    total_amount: totalToPay,
                    shipping_address: shippingAddress.address,
                  },
                  cart
                );
              router.push("/checkout");
              toast({
                title: "Transaction was unsuccessful",
                description:
                  "Sorry the inconvenience, Check your network and try again",
              });
            }
          })
      : null;
  }, []);

  return <span className="hidden"></span>;
}

export default VerifyPaymentUI;
