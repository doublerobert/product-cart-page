import ProductsGrid from "../components/ProductsGrid";
import useProducts from "../hooks/useProducts";
import { useState } from "react";
import styles from "../styles/App.module.css";
import CartCard from "../components/CartCard";
import ConfirmOrderModal from "../components/ConfirmOrderModal";
import useCart from "../hooks/useCart";

function App() {
  const { products, loading, error } = useProducts();
  const { cart } = useCart();
  const [showConfirmOrderModal, setShowConfirmOrderModal] = useState(false);

  return (
    <main className={`${styles.layout} bg-rose-100`}>
      <section className="flex flex-col gap-8">
        <h1 className="font-(--weight-bold) text-3xl text-text-primary">
          Desserts
        </h1>
        {loading && <p>Loading...</p>}
        {error && <p>Sorry {error}</p>}
        {!loading && !error && <ProductsGrid products={products} />}
      </section>
      <CartCard
        cart={cart}
        products={products}
        onShowConfirmOrderModal={() => {
          setShowConfirmOrderModal(true);
        }}
      />
      {showConfirmOrderModal && (
        <ConfirmOrderModal
          products={products}
          onShowConfirmOrderModal={() => {
            setShowConfirmOrderModal(false);
          }}
        />
      )}
    </main>
  );
}

export default App;
