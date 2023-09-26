import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import axios from "axios";
import MainButton from "../components/MainButton";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useContext } from 'react';
import NoteContext from "../context/NoteContext";


const Shopping = (props) => {
  const{count, updateCount} = useContext(NoteContext);

  const [data, setData] = useState([]);

  const handleClick = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    try {
      if (result.status === 200) {
        setData(result.data);
      } else {
      }
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  };

  useEffect(() => {
    handleClick();
  }, []);

  const handleAdd = (item) => {
    updateCount(count + 1);
    props.setSelect([...props.select, item]);
  };

  useEffect(() => {
if (props.select.length > 0) {
  const selectedItemsInfo = props.select.map((item) => ({
    qty: 1,
    pid: item.id,
    title: item.title,
    price: item.price,
    image: item.image,
  }));

  // Get existing products from localStorage (if any)
  let existingProducts = JSON.parse(localStorage.getItem('products')) || [];

  // Check if the last selected item already exists in the existing products
  const lastSelectedItem = selectedItemsInfo[selectedItemsInfo.length - 1];
  const exists = existingProducts.some((existingItem) => existingItem.pid === lastSelectedItem.pid);

  if (!exists) {
    // Add the last selected item to the existing products
    existingProducts.push(lastSelectedItem);

    // Update the localStorage with the updated products
    localStorage.setItem('products', JSON.stringify(existingProducts));
  }
}

  }, [props.select]);


  
  
  

  return (
    <Layout >
      <Container>
        <Row className="mt-4">
          {data.map((item) => (
            <Col key={item.id} md={3}>
              <Card className="cart_card">
                <Card.Img
                  variant="top"
                  src={item.image}
                  className="cart_image"
                />
                <Card.Body>
                  <Card.Title>{item.title.substring(0, 20)}</Card.Title>
                  <Card.Text>$ {item.price}</Card.Text>
                  <Card.Text>$ {item.id}</Card.Text>
                  <MainButton
                    onClick={() => handleAdd(item)}
                    name="Add to cart"
                  />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
};

export default Shopping;
