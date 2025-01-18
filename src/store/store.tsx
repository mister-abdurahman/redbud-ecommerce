"use client";
// import { ICart } from "@/lib/types";
import { QueryClient } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./authStore";
import {
  addProductToUserCart,
  getCartByUserId,
  removeProductFromUserCart,
} from "@/services/apiCart";
import { getProductById } from "@/services/apiProducts";
import { ICart } from "@/lib/types";

interface IAddress {
  address: string;
  price: number;
}

interface IProps {
  cart: ICart[];
  setCart: React.Dispatch<React.SetStateAction<ICart[]>>;
  adjustQuantityOfAProduct: (x: string, y: boolean) => void;
  addItemToCart: (x: ICart) => void;
  removeItemFromCart: (x: number) => void;
  shippingAddress: IAddress;
  setShippingAddress: React.Dispatch<React.SetStateAction<IAddress>>;
  totalToPay: number;
  setTotalToPay: React.Dispatch<React.SetStateAction<number>>;
}

const defaultValue: IProps = {
  cart: [],
  setCart: () => [],
  adjustQuantityOfAProduct: () => "",
  addItemToCart: () => "",
  removeItemFromCart: () => "",
  shippingAddress: { address: "", price: 0 },
  setShippingAddress: () => "",
  totalToPay: 0,
  setTotalToPay: () => 0,
};

export const MyContext = React.createContext(defaultValue);

// export const queryClient = new QueryClient();

export const MyContextProvider = function ({ children }) {
  const { user } = useContext(AuthContext);
  const [cart, setCart] = useState(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  const [totalToPay, setTotalToPay] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTotalToPay = localStorage.getItem("totalToPay");
      return savedTotalToPay ? Number(JSON.parse(savedTotalToPay)) : 0;
    }
    return 0;
  });

  const [shippingAddress, setShippingAddress] = useState<null | {
    address: string;
    price: number;
  }>(() => {
    if (typeof window !== "undefined") {
      const savedShippingAddress = localStorage.getItem("shippingAddress");
      return savedShippingAddress ? JSON.parse(savedShippingAddress) : null;
    }
    return null;
  });

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    if (shippingAddress) {
      localStorage.setItem("shippingAddress", JSON.stringify(shippingAddress));
    }
    if (totalToPay) {
      localStorage.setItem("totalToPay", JSON.stringify(totalToPay));
    }
  }, [cart, shippingAddress, totalToPay]);

  useEffect(
    function () {
      async function FetchCart() {
        const userCart = await getCartByUserId(user?.user?.id);
        // localStorage.setItem("cart", JSON.stringify(userCart));
        const modifiedCart = await Promise.all(
          userCart.map(async (el) => {
            const product = await getProductById(el.product_id);
            return {
              id: el.id,
              img_url: product.img_url,
              name: product.name,
              price: product.price,
              quantity: el.quantity,
              product_id: el.product_id,
            };
          })
        );
        console.log("what da heck?!", modifiedCart);
        setCart(modifiedCart);
        localStorage.setItem("cart", JSON.stringify(modifiedCart));
      }

      if (!user) return;
      else FetchCart();
    },
    [user, setCart]
  );

  function adjustQuantityOfAProduct(itemId: string, isIncrease: boolean) {
    setCart((el) => {
      if (isIncrease) {
        return el.map((e) =>
          e.id === itemId ? { ...e, quantity: e.quantity + 1 } : e
        );
      } else {
        return el.map((e) =>
          e.id === itemId
            ? { ...e, quantity: e.quantity <= 1 ? e.quantity : e.quantity - 1 }
            : e
        );
      }
    });
  }

  function removeItemFromCart(itemId: number) {
    setCart((el) => el.filter((e) => e.id !== itemId));
    user && removeProductFromUserCart(itemId);
  }

  function addItemToCart(newItem: ICart) {
    setCart((el) => [...el, newItem]);
    user && addProductToUserCart({ ...newItem, user_id: user.user.id });
  }

  return (
    <MyContext.Provider
      value={{
        cart,
        setCart,
        adjustQuantityOfAProduct,
        addItemToCart,
        removeItemFromCart,
        shippingAddress,
        setShippingAddress,
        totalToPay,
        setTotalToPay,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
