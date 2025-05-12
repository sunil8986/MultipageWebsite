import { useParams } from 'react-router';
import { useContext } from 'react';
import { Mydata } from '../../Context.js';
import { Col, Container, Row } from 'react-bootstrap'

export default function ServiceDetail() {
  const { id } = useParams();
  const { staticServices } = useContext(Mydata);

  const service = staticServices.find(item => item.id === parseInt(id));

  if (!service) return <p>Service not found</p>;

  return (

    <section className="service-detail-section py-5">
      <Container>
        <Row className="mb-4">
          <Col>
            <h2 className="fw-bold">{service.title}</h2>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col md={4} className=" mb-4 mb-md-0">
            <img
              src={service.image_url}
              alt={service.title}
              className="img-fluid shadow-sm"
            />
          </Col>
          <Col md={8}>
            <div className="service-description">
              <p className="lead">{service.text}</p>
              {/* Optional: add more info or CTA here */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
