import type { ProductSchema } from "../schema/productSchema";
import Button from "./Button";
import ConfirmOrderItemCard from "./ConfirmOrderItemCard";
import useUpdateOrderTotal from "../hooks/useUpdateOrderTotal";
import useCart from "../hooks/useCart";

interface ConfirmOrderModalProps {
  products: ProductSchema[];
  onShowConfirmOrderModal: () => void;
}

function ConfirmOrderModal({
  products,
  onShowConfirmOrderModal,
}: ConfirmOrderModalProps) {
  const { cart, clearCart } = useCart();
  const { orderTotal } = useUpdateOrderTotal({ cart, products });
  return (
    <div
      className="fixed bg-black/50 inset-0 flex items-center justify-center"
      onClick={onShowConfirmOrderModal}
    >
      <div className="flex flex-col gap-6 bg-white rounded-md max-h-[90vh] max-w-lg w-full p-8 ">
        <div className="flex flex-col gap-1.5">
          <div className="rounded-full flex items-center mb-3">
            <svg className="w-6 h-12 overflow-visible">
              <use href="/assets/icons.svg#order-confirmed" />
            </svg>
          </div>
          <h1 className="text-rose-900 font-bold text-4xl">Order Confirmed</h1>
          <p className="text-rose-500">We hope you enjoy your food!</p>
        </div>
        <div className="bg-rose-50 rounded-md p-4 overflow-y-scroll">
          {cart.map((cartItem) => (
            <ConfirmOrderItemCard
              key={cartItem.id}
              cartItem={cartItem}
              product={products.find((product) => cartItem.id === product.id) as ProductSchema}
            />
          ))}
          <div className="flex justify-between items-center py-4">
            <p className="text-rose-900 font-semibold">Order Total</p>
            <p className="text-rose-900 font-bold text-2xl">
              ${orderTotal.toFixed(2)}
            </p>
          </div>
        </div>
        <Button
          onClick={() => {
            clearCart();
            onShowConfirmOrderModal();
          }}
        >
          Start New Order
        </Button>
      </div>
    </div>
  );
}

export default ConfirmOrderModal;
