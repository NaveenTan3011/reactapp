import React from 'react'

const Cart = () => {


  // Retrieve the data from localStorage
  const storedData = localStorage.getItem("inputValue");

  // Parse the JSON string back into an object
  const selectedItemsInfo = JSON.parse(storedData);

console.log("Retrieved Selected Items Info:", selectedItemsInfo);

  return (
    <div>
      <h2>Selected Items</h2>
      <ul>
        {selectedItemsInfo.map((item) => (
          <li key={item.pid}>
            <span>{item.title}</span>
            <span>${item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
