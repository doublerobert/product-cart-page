import type { ProductSchema } from "../schema/productSchema";
import getCartItemQuantity from "../utils/getCartItemQuantity";
import useCart from "../hooks/useCart";

interface QuantityButtonProps {
  product: ProductSchema;
}

function QuantityButton({ product }: QuantityButtonProps) {
  const { cart, addToCart, reduceCartItem } = useCart();
  return (
    <div className=" border px-4 py-2.5 rounded-lg flex items-center gap-3 bg-accent text-[1rem] font-semibold text-white border-accent">
      <button
        onClick={() => {
          reduceCartItem(product.id);
        }}
        type="button"
        aria-label="Decrease quantity"
        className="w-5 h-5 flex items-center justify-center border border-white hover:bg-white hover:text-accent rounded-(--radius-full) pt-1.5 pl-1.5 p-1 transition-colors cursor-pointer"
      >
        <svg className="w-3 h-3 overflow-visible">
          <use href="/assets/icons.svg#decrement-quantity" />
        </svg>
      </button>
      <span className="mx-8">{getCartItemQuantity(cart, product.id)}</span>
      <button
        onClick={() => {
          addToCart(product.id);
        }}
        type="button"
        aria-label="Increase quantity"
        className="w-5 h-5 flex items-center justify-center border border-white hover:bg-white text-white hover:text-accent rounded-(--radius-full) pt-1.5 pl-1.5 p-1 transition-colors cursor-pointer"
      >
        <svg className="w-3 h-3 overflow-visible">
          <use href="/assets/icons.svg#increment-quantity" />
        </svg>
      </button>
    </div>
  );
}

export default QuantityButton;
