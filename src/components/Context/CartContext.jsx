import { createContext, useState } from "react";

const CartContext = createContext ();


export function CartContextProvider ({ children }){

    // agregar items al carrito
    const [itemsCart, setItemsCart] = useState({});
    
    function addItem(item, qty) {
        const itemToAdd = {...item, qty};
        // operador ...SPREAD = concatena 
        setItemsCart( [...itemsCart, item, qty] );
    }

    


    return (
        <CartContext.Provider value={ {addItem, itemsCart} }>
              {children}
        </CartContext.Provider>
    )


}
export default CartContext;