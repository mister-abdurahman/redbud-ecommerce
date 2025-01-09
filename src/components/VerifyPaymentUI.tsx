"use client";
import { toast } from "@/hooks/use-toast";
import { MyContext } from "@/store/store";
import { PaymentStatusDialog } from "@/ui/Payment/PaymentStatusModal";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useContext, useEffect } from "react";

const API_KEY = process.env.NEXT_PUBLIC_PAYSTACK_TEST_SECRET_KEY;

function VerifyPaymentUI() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const reference = searchParams.get("reference");
  const { setCart, totalToPay, setShippingAddress, setTotalToPay } =
    useContext(MyContext);

  // check where i am sending the initial post api, i am doing some amount manipulation there.

  useEffect(function () {
    reference
      ? fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("verification result:", data, "total:", totalToPay);
            if (data.status && data.data.amount == totalToPay * 100) {
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
