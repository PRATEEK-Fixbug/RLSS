import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';

const Home = () => {
  const [stats, setStats] = useState({ clients: 0, placements: 0, years: 0 });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    { text: "RLSS Enterprises helped us find the perfect team for our project!", author: "TechCorp Inc." },
    { text: "Outstanding recruitment services that exceeded our expectations.", author: "HealthCare Solutions" },
    { text: "Professional, reliable, and results-driven partnership.", author: "Manufacturing Plus" }
  ];

  useEffect(() => {
    // Animate statistics
    const animateStats = () => {
      setStats({ clients: 500, placements: 2000, years: 12 });
    };
    setTimeout(animateStats, 1000);

    // Rotate testimonials
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container fluid className="p-0">
      {/* Hero Section */}
      <div style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3,
          zIndex: 1
        }} />
        <Container style={{ position: 'relative', zIndex: 2 }}>
          <Row className="justify-content-center text-center text-white">
            <Col lg={10}>
              <Fade duration={2000}>
                <h1 className="display-2 fw-bold mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                  WELCOME TO RLSS ENTERPRISES
                </h1>
                <p className="lead mb-5" style={{ fontSize: '1.5rem', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                  Your trusted partner in Consultancy and Manpower Recruitment
                </p>
                <div className="d-flex justify-content-center gap-3">
                  <Button variant="light" size="lg" href="/services" className="px-4">
                    Our Services
                  </Button>
                  <Button variant="outline-light" size="lg" href="/contact" className="px-4">
                    Get Started
                  </Button>
                </div>
              </Fade>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Statistics Section */}
      <div style={{ background: '#1a1a1a', padding: '80px 0' }}>
        <Container>
          <Row className="text-center">
            <Col md={4}>
              <Fade duration={1500}>
                <div className="mb-4">
                  <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#007bff' }}>
                    {stats.clients}+
                  </div>
                  <div style={{ color: '#fff', fontSize: '1.2rem' }}>Happy Clients</div>
                </div>
              </Fade>
            </Col>
            <Col md={4}>
              <Fade duration={1500} delay={200}>
                <div className="mb-4">
                  <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#28a745' }}>
                    {stats.placements}+
                  </div>
                  <div style={{ color: '#fff', fontSize: '1.2rem' }}>Successful Placements</div>
                </div>
              </Fade>
            </Col>
            <Col md={4}>
              <Fade duration={1500} delay={400}>
                <div className="mb-4">
                  <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#ffc107' }}>
                    {stats.years}+
                  </div>
                  <div style={{ color: '#fff', fontSize: '1.2rem' }}>Years of Excellence</div>
                </div>
              </Fade>
            </Col>
          </Row>
        </Container>
      </div>

      {/* About Section */}
      <div style={{ background: '#121212', padding: '80px 0' }}>
        <Container>
          <Row>
            <Col lg={6}>
              <Slide direction="left" duration={1500}>
                <h2 className="mb-4" style={{ color: '#fff' }}>Who We Are</h2>
                <p style={{ color: '#e0e0e0', fontSize: '1.1rem', lineHeight: '1.8' }}>
                  RLSS Enterprises has been a pioneer in the recruitment and consultancy sector for over a decade. 
                  Our team is dedicated to connecting businesses with the right talent, ensuring both organizational 
                  growth and individual career advancement.
                </p>
                <div className="mt-4">
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                    <div style={{ width: '40px', height: '40px', background: '#007bff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '15px' }}>
                      <span style={{ color: '#fff', fontSize: '1.2rem' }}>✓</span>
                    </div>
                    <span style={{ color: '#e0e0e0' }}>Strategic Recruitment Solutions</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                    <div style={{ width: '40px', height: '40px', background: '#28a745', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '15px' }}>
                      <span style={{ color: '#fff', fontSize: '1.2rem' }}>✓</span>
                    </div>
                    <span style={{ color: '#e0e0e0' }}>Industry Expertise</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ width: '40px', height: '40px', background: '#ffc107', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '15px' }}>
                      <span style={{ color: '#fff', fontSize: '1.2rem' }}>✓</span>
                    </div>
                    <span style={{ color: '#e0e0e0' }}>Personalized Approach</span>
                  </div>
                </div>
              </Slide>
            </Col>
            <Col lg={6}>
              <Slide direction="right" duration={1500}>
                <div style={{ position: 'relative' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80" 
                    alt="Team" 
                    style={{ 
                      width: '100%', 
                      height: '400px', 
                      objectFit: 'cover', 
                      borderRadius: '15px',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                    }} 
                  />
                </div>
              </Slide>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Services Preview */}
      <div style={{ background: '#1a1a1a', padding: '80px 0' }}>
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <Fade duration={1500}>
                <h2 style={{ color: '#fff' }}>Our Core Services</h2>
                <p style={{ color: '#e0e0e0', fontSize: '1.1rem' }}>
                  Comprehensive solutions tailored to your business needs
                </p>
              </Fade>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Fade duration={1500}>
                <Card style={{ 
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
                  border: 'none', 
                  borderRadius: '15px',
                  transition: 'transform 0.3s ease'
                }} className="h-100 service-card">
                  <Card.Body className="text-center text-white p-4">
                    <div style={{ fontSize: '3rem', marginBottom: '20px' }}>👥</div>
                    <Card.Title style={{ fontSize: '1.5rem' }}>Recruitment</Card.Title>
                    <Card.Text>
                      Find the perfect talent for your organization with our comprehensive recruitment services.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Fade>
            </Col>
            <Col md={4}>
              <Fade duration={1500} delay={200}>
                <Card style={{ 
                  background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', 
                  border: 'none', 
                  borderRadius: '15px',
                  transition: 'transform 0.3s ease'
                }} className="h-100 service-card">
                  <Card.Body className="text-center text-white p-4">
                    <div style={{ fontSize: '3rem', marginBottom: '20px' }}>💼</div>
                    <Card.Title style={{ fontSize: '1.5rem' }}>Consultancy</Card.Title>
                    <Card.Text>
                      Strategic HR consulting to optimize your organizational structure and processes.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Fade>
            </Col>
            <Col md={4}>
              <Fade duration={1500} delay={400}>
                <Card style={{ 
                  background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', 
                  border: 'none', 
                  borderRadius: '15px',
                  transition: 'transform 0.3s ease'
                }} className="h-100 service-card">
                  <Card.Body className="text-center text-white p-4">
                    <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🎯</div>
                    <Card.Title style={{ fontSize: '1.5rem' }}>Training</Card.Title>
                    <Card.Text>
                      Comprehensive training programs to develop your team's skills and capabilities.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Fade>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Testimonials */}
      <div style={{ background: '#121212', padding: '80px 0' }}>
        <Container>
          <Row className="text-center">
            <Col>
              <Fade duration={1500}>
                <h2 style={{ color: '#fff', marginBottom: '50px' }}>What Our Clients Say</h2>
              </Fade>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Fade duration={1500}>
                <div style={{ 
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '20px',
                  padding: '40px',
                  textAlign: 'center',
                  color: '#fff',
                  position: 'relative'
                }}>
                  <div style={{ fontSize: '3rem', marginBottom: '20px' }}>💬</div>
                  <p style={{ fontSize: '1.3rem', fontStyle: 'italic', marginBottom: '20px' }}>
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
                    - {testimonials[currentTestimonial].author}
                  </div>
                </div>
              </Fade>
            </Col>
          </Row>
        </Container>
      </div>

      {/* CTA Section */}
      <div style={{ background: '#1a1a1a', padding: '80px 0' }}>
        <Container>
          <Row className="text-center">
            <Col>
              <Fade duration={1500}>
                <h2 style={{ color: '#fff', marginBottom: '30px' }}>Ready to Get Started?</h2>
                <p style={{ color: '#e0e0e0', fontSize: '1.2rem', marginBottom: '40px' }}>
                  Let's discuss how we can help your business grow with the right talent
                </p>
                <div className="d-flex justify-content-center gap-3">
                  <Button variant="primary" size="lg" href="/contact" className="px-5 py-3">
                    Contact Us Today
                  </Button>
                  <Button variant="outline-light" size="lg" href="/services" className="px-5 py-3">
                    Explore Services
                  </Button>
                </div>
              </Fade>
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  );
};

export default Home;
