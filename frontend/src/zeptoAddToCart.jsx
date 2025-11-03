import "./zeptoAddToCart.css";
import { useState } from "react";

function AddToCartButton({ className }) {
  const [count, setCount] = useState(0);

  return (
    <>
      {count === 0 ? (
        <button className={className} onClick={() => setCount(count + 1)}>
          Add To Cart
        </button>
      ) : (
        <div className={className}>
          <button onClick={() => setCount(count - 1)}>-</button>
          <p>{count}</p>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
      )}
    </>
  );
}

export default AddToCartButton;
