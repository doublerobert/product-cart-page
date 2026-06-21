import { useEffect, useState } from "react";
import type { CartItemSchema } from "../schema/cartItemSchema";
import type { ProductSchema } from "../schema/productSchema";

export default function useUpdateOrderTotal({
  cart,
  products,
}: {
  cart: CartItemSchema[];
  products: ProductSchema[];
}) {
  const [orderTotal, setOrderTotal] = useState(0);

  useEffect(() => {
    (function () {
      let orderTotal = 0;
      cart.forEach((cartItem) => {
        orderTotal +=
          cartItem.quantity *
          (
            products.find(
              (productItem) => cartItem.id === productItem.id,
            ) as ProductSchema
          ).price;
      });
      setOrderTotal(orderTotal);
    })();
  }, [cart]);

  return { orderTotal };
}
