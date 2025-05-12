import React from 'react'
import { Col, Container, Row,  Form, Button } from 'react-bootstrap'

const Contact = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
              <div>
                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7612.652841584796!2d78.37632009939983!3d17.44408393811783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93df6c34c5f7%3A0xe3b8b434e51adddc!2sHITEC%20City!5e0!3m2!1sen!2sin!4v1746940957539!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" title='Hitect City Map'></iframe>
              </div>
          </Col>
        </Row>
      </Container>

      <Container className="form-wrapper my-5">
        <Row className="align-items-center">
          {/* Left Column: Form */}
          <Col md={6}>
            <div className="form-box">
              <h1>Contact Us</h1>
              <form action="https://formspree.io/f/xpwdjpww" method="POST">
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control name='UserName' type="text" placeholder="Enter your name" required />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control name='Email' type="email" placeholder="Enter your email" required />
                </Form.Group>

                <Form.Group controlId="formMessage" className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control name='Message' as="textarea" rows={4} placeholder="Type your message" required />
                </Form.Group>

                <Button type="submit" className="btn w-100">
                  Submit
                </Button>
              </form>
            </div>
          </Col>

          {/* Right Column: Image */}
          <Col md={6}>
            <div className="contact-image">
              <img src="./img/contact.jpg" alt="Contact" className="img-fluid rounded" />
            </div>
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default Contact