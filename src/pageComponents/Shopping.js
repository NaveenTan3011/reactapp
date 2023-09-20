import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import axios from "axios";
import MainButton from "../components/MainButton";
import { Container, Row,Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';

const Shopping = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const handleClick = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    try {
      if (result.status === 200) {
        setData(result.data);
      } else {
      }
    } catch (error) {}
  };
  useEffect(() => {
    handleClick();
  }, []);

  const handleAdd = () => {
    setCount(count + 1);
  };
  return (
    <Layout count={count}>
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
                  <MainButton onClick={handleAdd} name="Add to cart"/>
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
