interface AddToCartButtonProps {
  onAddToCartClicked: () => void;
}

function AddToCartButton({ onAddToCartClicked }: AddToCartButtonProps) {
  return (
    <button
      type="button"
      aria-label="Add to Cart"
      onClick={onAddToCartClicked}
      className=" border px-6 py-2.5 rounded-lg flex items-center gap-3 bg-white text-[1rem] font-semibold text-text-primary border-(--color-border) cursor-pointer"
    >
      <svg className="w-4 h-4.5 overflow-visible">
        <use href="./assets/icons.svg#add-to-cart" />
      </svg>
      <span>Add to Cart</span>
    </button>
  );
}

export default AddToCartButton;
