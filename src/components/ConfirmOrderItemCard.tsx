import type { CartItemSchema } from "../schema/cartItemSchema";
import type { ProductSchema } from "../schema/productSchema";

interface ConfirmOrderItemCardProps {
  cartItem: CartItemSchema;
  product: ProductSchema;
}

function ConfirmOrderItemCard({
  cartItem,
  product,
}: ConfirmOrderItemCardProps) {
  return (
    <div className="flex justify-between items-center border-b border-b-rose-100">
      <div className="flex gap-3 items-center">
        <div className="">
          <img
            src={product.image.thumbnail}
            alt={`${product.name} Image`}
            className="rounded w-12"
          />
        </div>
        <div className="flex flex-col gap-1 py-3">
          <p className="text-rose-900 font-semibold">{product.name}</p>
          <p className="flex gap-2 text-rose-500">
            <span className="text-accent font-bold">{cartItem.quantity}x</span>
            <span>@ ${product.price.toFixed(2)}</span>
          </p>
        </div>
      </div>
      <span className="font-semibold">
        ${(product.price * cartItem.quantity).toFixed(2)}
      </span>
    </div>
  );
}

export default ConfirmOrderItemCard;
