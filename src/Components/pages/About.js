import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import HeroBanner from './HeroBanner';
import { FaLightbulb, FaPalette, FaCode, FaRocket } from "react-icons/fa";

const Aboutus = () => {

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
      <HeroBanner
        pageKey="about"
        // image="./img/home2.svg"
        // title="About Creative and Quality is Our Services"
        // description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
        // linkText="About us"
        // linkUrl="/About"
      />

        <Container className="about-us-section py-5">
          {/* Section: Who We Are */}
          <Row className="align-items-center mb-5">
            <Col md={6}>
              <img
                src="/img/whoweare.jpg"
                alt="Who We Are"
                className="img-fluid"
              />
            </Col>
            <Col md={6}>
              <div className="about-text">
                <h2>Who We Are</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </p>
              </div>
            </Col>
          </Row>

          {/* Section: What We Do */}
          <Row className="align-items-center flex-md-row-reverse">
            <Col md={6}>
              <img
                src="/img/whatwedo.png"
                alt="What We Do"
                className="img-fluid"
              />
            </Col>
            <Col md={6}>
              <div className="about-text">
                <h2>What We Do</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                </p>
              </div>
            </Col>
          </Row>
        </Container>

      <section className="process-section my-5 mb-5 pb-5 ">
        <Container>
          <div className="text-center mb-5   ">
            <h2 className="section-title">From Concept To Code: Our Process</h2>
            <p className="section-subtitle">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing.
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

      <div className="achievements-section py-5">
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
  );
}

export default Aboutus