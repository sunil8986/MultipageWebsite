import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import HeroBanner from './HeroBanner';
import { Mydata } from '../../Context.js';

const Aboutus = () => {

  let Data = useContext(Mydata);
  return (
    <>
      <HeroBanner
        image="./img/home2.svg"
        title="About Creative and Quality is Our Services"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
        linkText="About us"
        linkUrl="/About"
      />

      <Container>
          <Row> 
            <Col md={6}>
              About Left {Data}
            </Col>
            <Col md={6}>
              About Right
            </Col>
          </Row>
        </Container>

    </>
  )
}

export default Aboutus