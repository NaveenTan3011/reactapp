import React, { useState, useEffect } from "react";
import Layout from "../Layout";
import { MdDeleteForever } from "react-icons/md";

const CartPage = () => {
  // Retrieve the product info from local storage
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Load cart items from local storage when the component mounts
    const storedCartItems = JSON.parse(localStorage.getItem("products")) || [];
    setCartItems(storedCartItems);
  }, []);

  const handleAdd = (item) => {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.pid === item.pid) {
        return {
          ...cartItem,
          qty: (cartItem.qty || 0) + 1,
        };
      }
      return cartItem;
    });

    // Update the cart items in local storage
    localStorage.setItem("products", JSON.stringify(updatedCartItems));

    // Update the state to reflect the changes
    setCartItems(updatedCartItems);
  };

  const handleRemove = (item) => {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.pid === item.pid) {
        const newQty = (cartItem.qty || 0) - 1;
        return {
          ...cartItem,
          qty: newQty >= 1 ? newQty : 1,
        };
      }
      return cartItem;
    });

    // Update the cart items in local storage
    localStorage.setItem("products", JSON.stringify(updatedCartItems));

    // Update the state to reflect the changes
    setCartItems(updatedCartItems);
  };

  const handleRemoveItem = (item) => {
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.pid !== item.pid
    );

    // Update the cart items in local storage
    localStorage.setItem("products", JSON.stringify(updatedCartItems));

    // Update the state to reflect the changes
    setCartItems(updatedCartItems);
  };

  return (
    <>
      <Layout>
        <div className="cart_item">
          <h1>Cart</h1>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="mb-3 d-flex align-items-center">
                <div className="cart_upper">
                  <div className="cart_image">
                    <img
                      src={item.image}
                      alt="hey"
                      className="cart-item-image"
                    />
                  </div>
                  <div>
                    <div className="cart_title">{item.title}</div>
                    <div className="cart_price">
                      ${item.price} &nbsp; Total price: ${item.price * item.qty}
                      &nbsp;&nbsp;
                    </div>
                  </div>
                </div>
                <div className="quantity">
                  <strong>{item.qty || 0}</strong>
                  <button className="ms-3 me-1" onClick={() => handleAdd(item)}>
                    +
                  </button>
                  Quantity
                  <button className="mx-1" onClick={() => handleRemove(item)}>
                    -1
                  </button>
                  <button
                    className="ms-3"
                    onClick={() => handleRemoveItem(item)}
                  >
                    <MdDeleteForever />
                  </button>
                </div>
              <div>Total Price {}</div>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    </>
  );
};

export default CartPage;
