import { supabase } from "@/lib/supabase";
import { ICart, IOrder, IOrderItem } from "@/lib/types";
import { emptyUserCart } from "./apiCart";

export async function createOrder(orderDetails: IOrder, cart: ICart[]) {
  try {
    const { data: order, error }: { data: IOrder; error: any } = await supabase
      .from("orders")
      .insert([{ ...orderDetails }])
      .select("id")
      .single();

    if (error) {
      // throw new Error(`Product with id ${id} not Found`);
      throw new Error(error);
    }
    console.log("order data", order.id);

    const modifiedCart = cart.map((el) => {
      return {
        order_id: order.id,
        product_id: el.product_id,
        quantity: el.quantity,
      };
    });

    const { error: itemError } = await supabase
      .from("order_items")
      .insert(modifiedCart);

    if (itemError) {
      console.error("Error adding order items:", itemError);
    }

    const data = await emptyUserCart(orderDetails.user_id);

    return { success: true, message: "Order items added successfully!" };
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function getOrdersByUserId(user_id: string): Promise<IOrder[]> {
  try {
    const { data, error }: { data: unknown; error: any } = await supabase
      .from("orders")
      .select("*")
      .eq("user_id", user_id);

    if (error) {
      throw new Error(error);
    }
    return data as IOrder[];
  } catch (error) {
    console.error(error);
    return error;
  }
}
export async function getOrderItemsByOrderId(
  order_id: number
): Promise<IOrderItem[]> {
  try {
    const { data, error }: { data: unknown; error: any } = await supabase
      .from("order_items")
      .select("*")
      .eq("order_id", order_id);

    if (error) {
      throw new Error(error);
    }
    return data as IOrderItem[];
  } catch (error) {
    console.error(error);
    return error;
  }
}
