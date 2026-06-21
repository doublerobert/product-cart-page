import type { CartItemSchema } from "../schema/cartItemSchema";

const getTotalCartQuantity = (cart: CartItemSchema[]) =>
  cart.reduce((quantity, cartItem) => quantity + cartItem.quantity, 0);

export default getTotalCartQuantity;
