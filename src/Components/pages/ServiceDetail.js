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

    <>
      <Container>
        <Row>
          <Col>
            <h1>{service.title}</h1>
            <img src={service.image_url} alt={service.title} width={400} />
            <p>{service.text}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
