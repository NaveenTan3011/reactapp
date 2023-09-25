import React from "react";
import { useState } from "react";

const CartPage = () => {
  // Retrieve the product info from local storage
  const [count, setCount] = useState(1)
  const cartItems = JSON.parse(localStorage.getItem("products")) || [];
  const handleAdd = (item) => {
    const data = cartItems.filter((items) => items.pid === item.pid);
    console.log(data);
  }
  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className="mb-3">
            {item.title} &nbsp; ${item.price} &nbsp;
            {count}
            <button className="ms-3" onClick={() =>handleAdd(item)}>add Qty: 1</button>
            <button className="ms-3">remove Qty: -1</button>
            <button className="ms-3">remove items</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;
