import { supabase } from "@/lib/supabase";
import { ICart } from "@/lib/types";

export async function addProductToUserCart(cartDetails: ICart) {
  try {
    const { error }: { data: unknown; error: any } = await supabase
      .from("cart")
      .insert([
        {
          user_id: cartDetails.user_id,
          product_id: cartDetails.id,
          quantity: cartDetails.quantity,
        },
      ]);

    if (error) {
      // throw new Error(`Product with id ${id} not Found`);
      throw new Error(error);
    }
    return { success: true, message: "Porduct added to cart successfully!" };
  } catch (error) {
    console.error(error);
    return error;
  }
}
export async function removeProductFromUserCart(id: number) {
  try {
    const { data, error } = await supabase.from("cart").delete().eq("id", id);

    if (error) {
      // throw new Error(`Product with id ${id} not Found`);
      throw new Error(error.message);
    }
    return {
      success: true,
      message: "Product removed from cart successfully!",
    };
  } catch (error) {
    console.error(error);
    return error;
  }
}
export async function emptyUserCart(user_id: number) {
  try {
    const { data, error } = await supabase
      .from("cart")
      .delete()
      .eq("user_id", user_id);

    if (error) {
      // throw new Error(`Product with id ${id} not Found`);
      throw new Error(error.message);
    }
    return {
      success: true,
      message: "Emptied cart successfully!",
    };
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function getCartByUserId(user_id: string): Promise<ICart[]> {
  try {
    const { data, error }: { data: unknown; error: any } = await supabase
      .from("cart")
      .select("*")
      .eq("user_id", user_id);

    if (error) {
      // throw new Error(`Product with id ${id} not Found`);
      throw new Error(error);
    }
    return data as ICart[];
  } catch (error) {
    console.error(error);
    return error;
  }
}
