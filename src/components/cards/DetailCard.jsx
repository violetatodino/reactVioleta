import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import CartContext from "../Context/CartContext";

const DetailCard = ({ producto }) => {

  const {addItem} = useContext(CartContext);

  function addToCart(qty) {
    addItem(producto, qty);
  }

  return (
    <div className="container">
      <div className="mb-5">
        <h2 src={producto.name}></h2>
      </div>
      <div className="col col-6">
        <img className="card-img-top" src={producto.img} />
      </div>
      <div>
        <p> $</p>
      </div>
      <ItemCount addToCart={addToCart} stock={producto.stock} />
      <div>
        <button
        onClick={addToCart}
          type="button"
          className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-center"
        >
          Agregar al carrito
        </button>
      </div>
      
     </div>
  );
};

export default DetailCard;
