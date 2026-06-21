import type { ProductSchema } from "../schema/productSchema";
import ProductCard from "./ProductCard";
import styles from "../styles/ProductsGrid.module.css";

interface ProductsGridProps {
  products: ProductSchema[];
}

function ProductsGrid({ products }: ProductsGridProps) {
  return (
    <div className={`${styles.productGrid}`}>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export default ProductsGrid;
