import React, { useState } from "react";
import NoteContext from '../context/NoteContext'

const NoteState = (props)=>{
  const[ count, setCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (item) => {
      const itemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);
  
      if (itemIndex !== -1) {
        // If the item is already in the cart, update its quantity
        const updatedCartItems = [...cartItems];
        updatedCartItems[itemIndex].quantity += 1;
        setCartItems(updatedCartItems);
      } else {
        // If the item is not in the cart, add it with a quantity of 1
        setCartItems([...cartItems, { ...item, quantity: 1 }]);
      }
    };
    const updateCount = (newCount) =>{
      setCount(newCount);
    }
    return(
    <NoteContext.Provider value={{ cartItems, addItemToCart, count, updateCount }}>
        {props.children}
    </NoteContext.Provider>
)
}

export default NoteState


