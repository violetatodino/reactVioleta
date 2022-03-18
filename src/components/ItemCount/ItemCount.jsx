import React, { useState } from "react";

export default function ItemCount({ stock, addToCart }) {
  const [count, setCount] = useState(1);

  function suma() {
    if (count < stock) setCount(count + 1);
  }

  function resta() {
    if (count > stock) setCount(count - 1);
  }

  return (
    <div className="container">
      <div className="border-primary container mt-5">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic outlined example"
        >
          <button
            onClick={suma}
            type="button"
            className="btn btn-outline-primary"
          >
            {" "}
            -{" "}
          </button>
          <span className="my-auto px-5">Valor</span>
          <button
            onClick={resta}
            type="button"
            className="btn btn-outline-primary"
          >
            {" "}
            +{" "}
          </button>
        </div>
        <div className="container">
          <div className="text-center f-flex flex-column">
            <button
              onClick={()=>addToCart(count)}
              type="button"
              className="btn btn-outline-primary"
            >
              Agregar al carrito
            </button>
            <small className="text-muted mt-2">Stock disponible {stock}</small>
          </div>
        </div>
      </div>
    </div>
  );
}
