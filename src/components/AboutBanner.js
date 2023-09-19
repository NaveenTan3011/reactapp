import React from 'react'
import about_images from "../img/dog.jpg"
import Button from "./Button"
import { Container, Row, Col } from 'react-bootstrap'

const AboutBanner = () => {
  return (
    <div className="aboutbanner my-5">
        <Container>
            <Row>
                <Col md={6} className='d-flex align-items-center'>
            <div className="about_contenr">
                <h2>Lorem ipsum dolor sit.</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit consequatur distinctio perspiciatis in provident.</p>
                <Button name="More"/>
            </div>
            </Col>
            <Col md={6} >
            <div className="about_image">
                <img src={about_images} alt="" />
            </div>
            </Col>
            </Row>
            </Container>
    </div>
  )
}

export default AboutBanner
