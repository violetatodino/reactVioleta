import React from "react";
import { Link } from "react-router-dom";

const PintarCard = ({ producto }) => {
  return (
    <div className="p-5">
      <div className="">
        <img className="" src={producto.img} alt={producto.name}></img>
      </div>
      <div className="">
        <Link to={`/detail/${producto.id}`}>
          <span className="text-gray-700 text-lg mb-1 font-medium title-font text-center">
            {producto.name}
          </span>
        </Link>
      </div>
      <div className="container">
        <div className="text-center d-flex flex-column">
         <p>${producto.price}</p>
        </div>
      </div>
    </div>
  );
};
export default PintarCard;
