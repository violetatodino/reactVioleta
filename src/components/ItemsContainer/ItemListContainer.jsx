import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PintarCard from "../cards/pintarCard";

const ItemListContainer = () => {
  const [product, setProduct] = useState([]);
  const { category } = useParams();
  console.log(category);

  useEffect(() => {
    getProduct();
  }, [category]);
  // [] = array de dependencias : define qué valores voy a estar escuchando para que si en algun momento el valor definido dentro cambia, entonces volveré a ejecutar lo que está dentro del useEffect.

  const getProduct = () => {
    // const url = "../products.json"
    const url = "https://run.mocky.io/v3/5d1d8a79-69b5-4dc5-bfbe-b3c4a7f6cc17";
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (category) {
          const result = res.Productos.filter(
            (prod) => prod.category === category
          );
          setProduct(result);
        } else {
          setProduct(res.Productos);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-row p-10">
      {product.map((c) => (
        <PintarCard producto={c} />
      ))}
    </div>
  );
};
export default ItemListContainer;

