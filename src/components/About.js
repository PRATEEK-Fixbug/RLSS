import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';

const About = () => {
  return (
    <Container className="my-5">
      <Row className="text-center">
        <Col>
          <Fade duration={2000}>
            <h2>About RLSS ENTERPRISES</h2>
            <p>
              RLSS Enterprises (OPC) Pvt Ltd is a leading consultancy and manpower recruitment company that
              specializes in providing highly qualified manpower to organizations across various industries.
            </p>
          </Fade>
        </Col>
      </Row>

      {/* Mission and Vision */}
      <Row className="mt-5">
        <Col md={6}>
          <Fade duration={2000}>
            <h3>Our Mission</h3>
            <p>
              To connect businesses with the most qualified talent, ensuring success and growth through
              efficient recruitment solutions and professional consultancy.
            </p>
          </Fade>
        </Col>
        <Col md={6}>
          <Fade duration={2000}>
            <h3>Our Vision</h3>
            <p>
              To become the top manpower and consultancy service provider, offering innovative and reliable solutions
              that match the needs of the modern workforce.
            </p>
          </Fade>
        </Col>
      </Row>

      {/* Our Team Section */}
      <div className="my-5">
        <h2>Our Team</h2>
        <p>
          Meet the dedicated professionals who make RLSS Enterprises a leader in the recruitment industry.
        </p>
        <div style={{ width: '100%', height: '400px', marginBottom: '20px' }}>
          <img
            src="/images/team.jpg" // Corrected image path
            alt="Our Team"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
    </Container>
  );
};

export default About;
