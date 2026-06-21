import type { ProductSchema } from "../../schema/productSchema";
import AddToCartButton from "../buttons/AddToCartButton";
import QuantityButton from "../buttons/QuantityButton";
import getCartItemQuantity from "../../utils/getCartItemQuantity";
import useCart from "../../hooks/useCart";

interface ProductCardProps {
  product: ProductSchema;
}

function ProductCard({ product }: ProductCardProps) {
  const { cart, addToCart } = useCart();

  return (
    <div className="flex flex-col gap-8">
      <div className="relative flex justify-center">
        <picture>
          <source media="(min-width: 1024px)" srcSet={product.image.desktop} />
          <source media="(min-width: 640px)" srcSet={product.image.tablet} />
          <source media="(max-width: 639px)" srcSet={product.image.mobile} />

          <img
            src={product.image.thumbnail}
            alt={`${product.name} Image`}
            className={` rounded-md ${getCartItemQuantity(cart, product.id) && "border-4 border-accent"}`}
          />
        </picture>
        <div className="absolute -bottom-6 ">
          {!getCartItemQuantity(cart, product.id) ? (
            <AddToCartButton
              onAddToCartClicked={() => {
                addToCart(product.id);
              }}
            />
          ) : (
            <QuantityButton product={product} />
          )}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-text-muted text-[0.85rem]">{product.category}</p>
        <p className="font-(--weight-semibold) text-text-primary">
          {product.name}
        </p>
        <p className="font-(--weight-semibold) text-accent">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
