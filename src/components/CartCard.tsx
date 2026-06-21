import useUpdateOrderTotal from "../hooks/useUpdateOrderTotal";
import type { CartItemSchema } from "../schema/cartItemSchema";
import type { ProductSchema } from "../schema/productSchema";
import getTotalCartQuantity from "../utils/getTotalCartQuantity";
import Button from "./Button";
import CartItemCard from "./CartItemCard";

interface CartCardProps {
  cart: CartItemSchema[];
  products: ProductSchema[];
  onShowConfirmOrderModal: () => void;
}

function CartCard({ cart, products, onShowConfirmOrderModal }: CartCardProps) {
  const { orderTotal } = useUpdateOrderTotal({ cart, products });

  return (
    <aside className="flex flex-col gap-3 bg-rose-50 p-8 rounded-md">
      <h1 className="text-accent font-(--weight-bold) text-2xl">
        Your Cart ({getTotalCartQuantity(cart)})
      </h1>
      {getTotalCartQuantity(cart) ? (
        <div className="flex flex-col gap-10">
          <div>
            {cart.map((cartItem) => (
              <CartItemCard
                key={cartItem.id}
                cartItem={cartItem}
                product={products.find((product) => cartItem.id === product.id) as ProductSchema}
              />
            ))}
          </div>
          <div className="flex justify-between items-center">
            <p className="text-rose-900 font-semibold">Order Total</p>
            <p className="text-rose-900 font-bold text-2xl">
              ${orderTotal.toFixed(2)}
            </p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <svg className="w-4 h-5 overflow-visible">
              <use href="./assets/icons.svg#carbon-neutral"></use>
            </svg>
            <p className="text-rose-900">
              This is a <span className="font-semibold">carbon-neutral</span>{" "}
              delivery
            </p>
          </div>
          <Button onClick={onShowConfirmOrderModal}>Confirm Order</Button>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-3">
          <img
            src="/assets/illustration-empty-cart.svg"
            alt="Empty Cart Image"
          />
          <p className="font-semibold text-rose-500">
            Your added items will appear here
          </p>
        </div>
      )}
    </aside>
  );
}

export default CartCard;
