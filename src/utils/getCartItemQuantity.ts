import type { CartItemSchema } from "../schema/cartItemSchema";

const getCartItemQuantity = (cart: CartItemSchema[], cartItemId: string) =>
  cart.find(( cartItem) => cartItem.id === cartItemId )?.quantity;

export default getCartItemQuantity;
