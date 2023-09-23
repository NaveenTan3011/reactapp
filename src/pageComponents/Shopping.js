import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import axios from "axios";
import MainButton from "../components/MainButton";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const Shopping = (props) => {
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

  const handleAdd = (item) => {
    setCount(count + 1);
    props.setSelect([...props.select, item]);
  };

  useEffect(() => {
    if (props.select.length > 0) {
      const selectedItemsInfo = props.select.map((item) => ({
        pid: item.id,
        title: item.title,
        price: item.price,
      }));
      
      // Stringify the selectedItemsInfo object before storing it
      localStorage.setItem("inputValue", JSON.stringify(selectedItemsInfo));
  
      console.log("Selected Items Info:", selectedItemsInfo);
    }
  }, [props.select]);
  

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
