import React from 'react'
import HeroBanner from './HeroBanner'
import { Col, Container, Row } from 'react-bootstrap'

const Home = () => {
  return (
    <>
      <HeroBanner pageKey="home"
        // image="./img/home1.svg"
        // title="Creative and Quality is Our Services"
        // description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
        // linkText="About us"
        // linkUrl="/About"
      />

      <Container>
          <Row> 
            <Col md={6}>
              left
            </Col>
            <Col md={6}>
              Right
            </Col>
          </Row>
        </Container>

    </>
  )
}

export default Home