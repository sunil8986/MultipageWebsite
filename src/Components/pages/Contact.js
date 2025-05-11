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

      <Container fluid className="form-wrapper">
      <Row className="justify-content-center align-items-center min-vh-50">
        <Col md={4}>
          <div className="form-box">
            <h2>Contact Us</h2>
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

              <Button variant="primary" type="submit" value="send" className="w-30">
                Submit
              </Button>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Contact