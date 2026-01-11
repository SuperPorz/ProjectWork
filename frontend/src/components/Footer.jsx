import { Container, Col, Row } from "react-bootstrap";

function Footer() {
  return (
    <footer className="py-3 bg-body-tertiary">
      <Container>
        <Row className="justify-content-center">
          <Col md="auto">
            <i>© 2026 Stega Michelangelo - Project Work</i>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;