import React from 'react';
import { Link } from 'react-router-dom';

const PintarCard = ({producto}) => {
  return (

    <div className="p-5">
      <div className="">
        <img className="" src={producto.img} alt={producto.name}></img>
      </div>
      <div className="">
        <Link to={`/detail/${producto.id}`} >
          <span className="">{producto.name}</span>
        </Link>
        <p className=""></p>
      </div>
   
    </div>  
    
   
    
    
  )
}
export default PintarCard