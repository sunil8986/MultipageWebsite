import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import HeroBanner from './HeroBanner'
import { NavLink } from 'react-router'
import { Mydata } from '../../Context.js';

const Services = () => {

  const { staticServices } = useContext(Mydata);

  return (
    <>

      <HeroBanner pageKey="service"
        // image="./img/home1.svg"
        // title="Creative and Quality is Our Services"
        // description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
        // linkText="About us"
        // linkUrl="/About"
      />

      <Container>
        <Row>
          <Col><h1>Services</h1></Col>
        </Row>
        <Row className='mt-5 gy-5 gx-5'>
          {
            staticServices.map((service) => {
              return <>
                <Col md={4}>
                  <div className="card">
                    <div className="card-image-wrapper">
                      <div className="overlay"></div>
                      <img src={service.image_url} alt={service.title} />
                    </div>
                    <h1>{service.title}</h1>
                    <p>{service.text}</p>
                    <NavLink to={`/services/${service.id}`} className="read-more-btn">Read More</NavLink>
                  </div>
                </Col>
              </>
            })
          }
        </Row>
      </Container>
    </>
  )
}

export default Services