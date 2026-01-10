import { Col, Row } from "react-bootstrap";

function Footer() {
    return(
        <>
            <footer>
                <Row className="justify-content-md-center">
                    <Col lg="2"></Col>
                    <Col md="auto">
                        <i>© 2026 Stega Michelangelo</i>
                    </Col>
                    <Col lg="2"></Col>
                </Row>
            </footer>
        </>
    )
}

export default Footer;