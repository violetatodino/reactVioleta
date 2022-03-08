
import React from 'react'

const PintarCard = ({producto}) => {
  return (

    <div className="">
      <div className="">
        <img className="" src={producto.img} alt={producto.name}></img>
      </div>
      <div className="">
        <a href="#" className="">
          <span className="">{producto.name}</span>
        </a>
        <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
   
    </div>  
    
   
    
    
  )
}
export default PintarCard