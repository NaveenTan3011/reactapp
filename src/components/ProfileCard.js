import React from 'react'
import {Card,Button, Container, Row, Col} from 'react-bootstrap'
import Image1 from '../img/dog.jpg'
import Image2 from '../img/dog.jpg'
import Image3 from '../img/dog.jpg'


const ProfileCard = () => {
    const data =[
        {
            id: 1,
            tittle: "Naveen",
            text: "this is naveen profile",
            img: Image1
        },
        {
            id:2,
            tittle: "Anil Kumar",
            text: "this is anil profile",
            img: Image2
        },
        {
            id:3,
            tittle: "Rahul yadav",
            text: "this is rahul profile",
            img: Image3
        }
    ]

  return (
    <Container>
        <Row className='my-5'> 
        <h2 className='text-center mb-5' > Lorem ipsum dolor sit amet.</h2>
            { data.map((card) => (
            <Col key={card.id} md={4}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={card.img} alt=''/>
      <Card.Body>
        <Card.Title>{card.tittle}</Card.Title>
        <Card.Text>{card.text} </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    ))
    }
    </Row>
    </Container>
  );
}



export default ProfileCard
