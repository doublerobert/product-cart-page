import { createContext, useState } from "react";
import type { ReactNode } from "react";
import type { CartItemSchema } from "../schema/cartItemSchema";

interface CartContextType {
  cart: CartItemSchema[];
  addToCart: (cartItemId: string) => void;
  reduceCartItem: (cartItemId: string) => void;
  removeCartItem: (cartItemId: string) => void;
  clearCart: () => void;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartItemSchema[]>([]);

  function addToCart(cartItemId: string) {
    setCart((previousCartItems) => {
      const exists = previousCartItems.some(
        (cartItem) => cartItem.id === cartItemId,
      );
      if (exists) {
        return previousCartItems.map((cartItem) =>
          cartItem.id === cartItemId
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem,
        );
      }

      return [...previousCartItems, { id: cartItemId, quantity: 1 }];
    });
  }

  function reduceCartItem(cartItemId: string) {
    setCart((previousCartItems) => {
      const exists = previousCartItems.some(
        (cartItem) => cartItem.id === cartItemId,
      );
      if (exists) {
        return previousCartItems
          .map((cartItem) =>
            cartItem.id === cartItemId
              ? {
                  ...cartItem,
                  quantity: cartItem.quantity - 1,
                }
              : cartItem,
          )
          .filter((cartItem) => cartItem.quantity);
      }

      return previousCartItems.filter((cartItem) => cartItem.quantity);
    });
  }

  function removeCartItem(cartItemId: string) {
    setCart((previousCartItems) => {
      const exists = previousCartItems.some(
        (cartItem) => cartItem.id === cartItemId,
      );
      if (exists) {
        return previousCartItems
          .filter((cartItem) => cartItem.id !== cartItemId)
          .filter((cartItem) => cartItem.quantity);
      }

      return previousCartItems.filter((cartItem) => cartItem.quantity);
    });
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, reduceCartItem, removeCartItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
