import { CURRENCY } from "@/lib/constants";
import { ICartDisplay } from "@/lib/types";
import Image from "next/image";
import React from "react";

interface OrderProps {
  id: number;
  created_at: string;
  status: boolean;
  total_amount: number;
  shipping_address: string;
  order_items: ICartDisplay[];
}

function OrderHistoryCard({ orderData }: { orderData: OrderProps[] }) {
  return (
    <div className="flex gap-3">
      {orderData.map((el) => (
        <div className="bg-gray-100 rounded-md p-4">
          <div className="flex justify-between items-center border-b border-gray-600 p-3">
            <p
              className={`font-semibold rounded-full text-white px-3 text-sm ${
                el.status ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {el.status ? "Successfull" : "Failed"}
            </p>
            <div>
              <p className="text-xs">
                {new Intl.DateTimeFormat("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                }).format(new Date(el.created_at))}
              </p>
            </div>
          </div>
          {el.order_items.map((el, i) => (
            <EachOrderItem key={i} order_item={el} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default OrderHistoryCard;

function EachOrderItem({ order_item }: { order_item: ICartDisplay }) {
  return (
    <div className="flex w-full items-center gap-4 bg-white rounded-md p-4">
      <Image
        src={order_item.img_url}
        width={100}
        height={100}
        alt="Product image"
      />
      <div>
        <p>{order_item.name}</p>
        <p>
          {CURRENCY}
          {order_item.price} x{" "}
          <span className="font-thin">{order_item.quantity}</span>
        </p>
      </div>
      <div className="ml-auto">
        <p className="text-3xl font-bold">
          Total: {order_item.price * order_item.quantity}
        </p>
      </div>
    </div>
  );
}
