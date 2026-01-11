import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/scifi_warehouse_1.jpg';
import img2 from '../assets/scifi_warehouse_2.jpg';
import img3 from '../assets/scifi_warehouse_3.jpg';
import { Col, Container, Row } from 'react-bootstrap';

function Homepage() {
  return (
    <>
        <Container className="text-center mb-4">
            <Row>
            <Col>
                <h1 id="title">
                    Warehouse Order Management Platform
                </h1>
                <h3 className="text-muted mt-2">
                    <i>An intelligent logistics flow control system with advanced warehouse operation optimization.</i>
                </h3>
            </Col>
            </Row>
        </Container>

        <Container>
            <Carousel>
                <Carousel.Item interval={1500}>
                    <img
                    className="d-block w-100"
                    src={img1}
                    alt="Sci-fi warehouse"
                    />
                    <Carousel.Caption>
                    <h3>Evolution & Logistic</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                    className="d-block w-100"
                    src={img2}
                    alt="Sci-fi warehouse"
                    />
                    <Carousel.Caption>
                    <h3>Robotic & Automation</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                    className="d-block w-100"
                    src={img3}
                    alt="Sci-fi warehouse"
                    />
                    <Carousel.Caption>
                    <h3>Technology & Efficiency</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    </>
  );
}

export default Homepage;