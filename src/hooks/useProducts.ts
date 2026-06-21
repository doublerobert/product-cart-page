import { useEffect, useState } from "react";
import type { ProductSchema } from "../schema/productSchema";
import { getProducts } from "../services/productService";
import { v7 as uuidv7 } from "uuid";

export default function useProducts() {
  const [products, setProducts] = useState<ProductSchema[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async function () {
      try {
        const data: Omit<ProductSchema, "id">[] = await getProducts();
        setProducts(
          data.map((productItem) => ({ ...productItem, id: uuidv7() })),
        );
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
          console.error(error.message);
        }
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { products, loading, error };
}
