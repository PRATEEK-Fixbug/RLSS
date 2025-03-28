import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';

const Services = () => {
  return (
    <Container className="my-5">
      <Row className="text-center">
        <Col>
          <Fade duration={2000}>
            <h2>Our Services</h2>
            <p>
              RLSS Enterprises provides top-tier recruitment and consultancy services tailored to meet the unique needs of your business.
            </p>
          </Fade>
        </Col>
      </Row>

      <Row className="my-5">
        <Col md={4}>
          <Fade duration={2000}>
            <Card>
              <Card.Body>
                <Card.Title>Recruitment Services</Card.Title>
                <Card.Text>
                  We specialize in finding the best talent for your company, whether it’s permanent staff or temporary solutions.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Fade>
        </Col>

        <Col md={4}>
          <Fade duration={2000}>
            <Card>
              <Card.Body>
                <Card.Title>Consultancy Services</Card.Title>
                <Card.Text>
                  Our expert consultants provide strategic advice on recruitment, organizational structure, and talent management.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Fade>
        </Col>

        <Col md={4}>
          <Fade duration={2000}>
            <Card>
              <Card.Body>
                <Card.Title>Training & Development</Card.Title>
                <Card.Text>
                  We offer comprehensive training programs to upskill your employees and prepare them for future challenges.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Fade>
        </Col>
      </Row>

      {/* Service Implementation Image */}
      <div className="my-5">
        <h2>Service Implementation</h2>
        <div style={{ width: '100%', height: '400px', marginBottom: '20px' }}>
          <img
            src="/images/alt.jpg" // Corrected image path
            alt="Service Implementation"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
    </Container>
  );
};

export default Services;
