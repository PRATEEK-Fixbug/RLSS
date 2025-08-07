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
            <p style={{ fontSize: '1.1rem' }}>
              <strong>Our Journey:</strong> Since our inception in 2012, we have successfully placed thousands of candidates in top organizations, helping both businesses and individuals achieve their goals. Our leadership team brings decades of experience in HR, recruitment, and business consulting.
            </p>
            <p style={{ fontSize: '1.1rem' }}>
              <strong>Achievements:</strong> RLSS Enterprises has been recognized for its outstanding service and commitment to quality. We have received multiple awards for excellence in recruitment and client satisfaction.
            </p>
            <p style={{ fontSize: '1.1rem' }}>
              <strong>Leadership:</strong> Our founder and CEO, Mr. R.L. Sharma, is a visionary leader with a passion for empowering people and organizations. Under his guidance, RLSS Enterprises has become a trusted name in the industry.
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
        <div style={{ width: '100%', height: '400px', marginBottom: '20px', overflow: 'hidden', borderRadius: '12px' }}>
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
            alt="Our Team"
            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s', cursor: 'pointer' }}
            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
          />
        </div>
        <div style={{ margin: '40px 0' }}>
          <h3>Our Journey</h3>
          <div style={{ background: '#222', color: '#fff', borderRadius: '8px', padding: '20px', minHeight: '120px', margin: '20px 0' }}>
            {/* Interactive timeline placeholder */}
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><strong>2012:</strong> Company founded</li>
              <li><strong>2015:</strong> Expanded to new sectors</li>
              <li><strong>2020:</strong> Recognized as industry leader</li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
