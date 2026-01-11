import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/scifi_warehouse_1.jpg';
import img2 from '../assets/scifi_warehouse_2.jpg';
import img3 from '../assets/scifi_warehouse_3.jpg';
import { Col, Container, Row } from 'react-bootstrap';

function Homepage() {
  return (
    <>
      <Container className="text-center mb-5 mt-5">
        <Row>
          <Col>
            <h1 id="title" className="mb-4">
              Warehouse Order Management Platform
            </h1>
            <h3 className="mt-3" style={{ fontSize: '1.1rem', fontWeight: '400' }}>
              <i>An intelligent logistics flow control system with advanced warehouse operation optimization.</i>
            </h3>
          </Col>
        </Row>
      </Container>

      <Container className="mb-5">
        <div style={{ height: '408px', overflow: 'hidden', borderRadius: '8px' }}>
          <Carousel fade>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src={img1}
                alt="Sci-fi warehouse"
                style={{ 
                  borderRadius: '8px',
                  border: '1px solid #2a3447',
                  height: '408px',
                  objectFit: 'cover'
                }}
              />
              <Carousel.Caption style={{
                  backgroundColor: 'rgb(36, 40, 50)',
                  padding: '10px 2px',
                  borderRadius: '8px',
                  bottom: '30px'
                }}>
                <h3>Evolution & Logistic</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src={img2}
                alt="Sci-fi warehouse"
                style={{ 
                  borderRadius: '8px',
                  border: '1px solid #2a3447',
                  height: '408px',
                  objectFit: 'cover'
                }}
              />
              <Carousel.Caption style={{
                  backgroundColor: 'rgb(36, 40, 50)',
                  padding: '10px 2px',
                  borderRadius: '8px',
                  bottom: '30px'
                }}>
                <h3>Robotic & Automation</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src={img3}
                alt="Sci-fi warehouse"
                style={{ 
                  borderRadius: '8px',
                  border: '1px solid #2a3447',
                  height: '408px',
                  objectFit: 'cover'
                }}
              />
              <Carousel.Caption style={{
                  backgroundColor: 'rgb(36, 40, 50)',
                  padding: '10px 2px',
                  borderRadius: '8px',
                  bottom: '30px'
                }}>
                <h3>Technology & Efficiency</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </Container>
    </>
  );
}

export default Homepage;