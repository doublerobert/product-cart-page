import type { CartItemSchema } from "../schema/cartItemSchema";
import type { ProductSchema } from "../schema/productSchema";
import useCart from "../hooks/useCart";

interface CartItemCardProps {
  cartItem: CartItemSchema;
  product: ProductSchema;
}

function CartItemCard({ cartItem, product }: CartItemCardProps) {
  const { removeCartItem } = useCart();

  return (
    <div className="flex justify-between items-center border-b border-b-rose-100">
      <div className="flex flex-col gap-1 py-3">
        <p className="text-rose-900 font-semibold">{product.name}</p>
        <p className="flex gap-2 text-rose-500">
          <span className="text-accent font-bold">{cartItem.quantity}x</span>
          <span>@ ${product.price.toFixed(2)}</span>
          <span className="font-semibold">
            ${(product.price * cartItem.quantity).toFixed(2)}
          </span>
        </p>
      </div>
      <button
        onClick={() => {
          removeCartItem(cartItem.id);
        }}
        type="button"
        aria-label="Remove cart item"
        className="flex border rounded-full justify-between items-center w-5 h-5 p-1 pt-1.5 border-rose-500 text-rose-500 hover:border-rose-900 hover:text-rose-900 transition-colors cursor-pointer"
      >
        <svg className="w-3 h-3 overflow-visible">
          <use href="./assets/icons.svg#remove-item" />
        </svg>
      </button>
    </div>
  );
}

export default CartItemCard;
