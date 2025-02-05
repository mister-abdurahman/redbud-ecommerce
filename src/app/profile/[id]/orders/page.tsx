import Spinner from "@/components/Spinner";
import {
  getOrderItemsByOrderId,
  getOrdersByUserId,
} from "@/services/apiOrders";
import { getProductById } from "@/services/apiProducts";
import OrderHistoryCard from "@/ui/Order/OrderHistoryCard";
import React, { Suspense } from "react";

export const metadata = {
  title: "Orders",
};

async function page({ params }) {
  const user_id = await params.id;
  const orders = await getOrdersByUserId(user_id);

  const modified = await Promise.all(
    orders.map(async (el) => {
      const y = await getOrderItemsByOrderId(el.id);
      const order_items_products = await Promise.all(
        y.map(async (el) => {
          return {
            img_url: (await getProductById(el.product_id)).img_url,
            name: (await getProductById(el.product_id)).name,
            price: (await getProductById(el.product_id)).price,
            quantity: el.quantity,
          };
        })
      );
      return {
        id: el.id,
        created_at: el.created_at,
        status: el.status,
        total_amount: el.total_amount,
        shipping_address: el.shipping_address,
        order_items: order_items_products,
      };
    })
  );

  return (
    <div className="w-full">
      <Suspense fallback={<Spinner />}>
        {" "}
        <OrderHistoryCard orderData={modified} />{" "}
      </Suspense>
    </div>
  );
}

export default page;
