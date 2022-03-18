import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import DetailCard from '../cards/DetailCard';

const ItemDetailContainer = () => {
    // Hooks
    const [producto, setProducto] = useState(null);
    const { id } = useParams();
    const [cant, setCant] =useState (1);

    useEffect(() => {
        setTimeout(() => {
            getProductById(id);
        }, 2000);
        

    }, [])

    

    const getProductById = async ( id ) => {
        try {

            const resp = await fetch('../products.json');
            const data = await resp.json();
            const product = data.Productos.find(el => el.id == id);
            setProducto(product);


        } catch (error) {
            console.warn(error);    
        }
    }
    

  return (
    <div>
        {
          producto 
            ? <DetailCard  producto={ producto } />
            : <p> Cargando producto... </p> 
        }
    </div>
  )
}

export default ItemDetailContainer