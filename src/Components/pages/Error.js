import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router'
    
const Error = () => {
  return (
    <>
        <Container>
        <Row>
          <Col>
              <div>
                 <img src='../img/error.svg' alt='Page Not Found' width="600px" className='align-center' />
              </div>
              <NavLink to="/">Go Back to Home</NavLink>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Error