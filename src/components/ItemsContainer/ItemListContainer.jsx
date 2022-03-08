import { useEffect, useState } from "react"
import PintarCard from "../cards/pintarCard"

const ItemListContainer = () => {

  const [product,setProduct] = useState([])

  useEffect(()=>{
      getProduct()
  },[])


  const getProduct = ()=>{
      const url = "products.json"
      fetch(url)
           .then(res=>res.json())
           .then(res =>{
            setProduct(res.Productos)
           })
           .catch(error=>{
            console.log(error)
          
        })
  }


  return (
      
         <div className="flex inline-flex flex-wrap -m-4 " >

            {product.map(c=><PintarCard  producto={c}/>)}

            </div>
     
   
  )
}
export default ItemListContainer