import React from 'react'
import HeroBanner from './HeroBanner'
import { Col, Container, Row, Button } from 'react-bootstrap'
import { FaLightbulb, FaPalette, FaCode, FaRocket } from "react-icons/fa";

const Home = () => {

  const steps = [
    {
      icon: <FaLightbulb />,
      title: "Strategy",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing. ",
    },
    {
      icon: <FaPalette />,
      title: "Design",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing. ",
    },
    {
      icon: <FaCode />,
      title: "Development",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing. ",
    },
    {
      icon: <FaRocket />,
      title: "Delivery",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing . ",
    },
  ];


  return (
    <>
      <HeroBanner pageKey="home"
      // image="./img/home1.svg"
      // title="Creative and Quality is Our Services"
      // description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
      // linkText="About us"
      // linkUrl="/About"
      />

      <Container className="quote-section pb-5 mt-5">
        <Row className="align-items-center">
          <Col md={6}>
            <div className="quote-content">
              <h2>Build Your Online Presence</h2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              <Button>Get A Quote</Button>
            </div>
          </Col>
          <Col md={6}>
            <img src="/img/2817.jpg" alt="Estimate Project" className="img-fluid" />
          </Col>
        </Row>
      </Container>



      <section className="process-section my-5 mb-5 pb-5 ">
      <Container>
        <div className="text-center mb-5   ">
          <h2 className="section-title">From Concept To Code: Our Process</h2>
          <p className="section-subtitle">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing.  
          </p>
        </div>
        <Row className="gy-5 justify-content-center text-center">
          {steps.map((step, i) => (
            <Col key={i} md={6} lg={3}>
              <div className={`process-circle circle-${i + 1}`}>
                <div className="step-icon">{step.icon}</div>
                <h4 className="step-title">{step.title}</h4>
                <p className="step-desc">{step.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>


      <div className="feature-section">
        <div className="overlay"></div>
        <Container className="text-white position-relative py-5">
          <Row className="g-4">
            <Col md={6} lg={3}>
              <div className="info-box">
                <h5>Platform Choice</h5>
                <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="info-box">
                <h5>Graphic Elements</h5>
                <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                </p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="info-box">
                <h5>Post Launch SEO</h5>
                <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                </p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="info-box">
                <h5>Our Services</h5>
                <p>
                Lorem ipsum Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="achievements-section">
        <Container>
          <h2 className="text-center mb-5">Our Achievements at a Glance</h2>
          <Row className="text-center g-4">
            <Col md={6} lg={3}>
              <div className="achievement-box">
                <h3>180+</h3>
                <p>Webpulse Team Members</p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="achievement-box">
                <h3>500+</h3>
                <p>Satisfied Clients & Growing</p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="achievement-box">
                <h3>900+</h3>
                <p>Completed Websites</p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="achievement-box">
                <h3>$100M+</h3>
                <p>Sales Generated for Clients</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

    </>
  )
}

export default Home