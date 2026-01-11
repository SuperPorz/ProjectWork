import { Col, Row, Container } from "react-bootstrap";
import FormComponent from "./FormComponent";
import TableComponent from "./TableComponent";

function Orders() {
  return (
    <Container className="py-5">
      <Row className="justify-content-md-center mb-5">
        <Col lg={8} md={10}>
          <div 
            style={{ 
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
              padding: '2.5rem'
            }}
          >
            <h1 className="text-center mb-4" style={{ 
              color: 'var(--accent-cyan)', 
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontWeight: '700',
              fontSize: '1.8rem'
            }}>
              Place Order
            </h1>
            <FormComponent />
          </div>
        </Col>
      </Row>

      <Row className="justify-content-md-center">
        <Col lg={10} md={12}>
          <div 
            style={{ 
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
              padding: '2.5rem'
            }}
          >
            <h1 className="text-center mb-4" style={{ 
              color: 'var(--accent-cyan)', 
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontWeight: '700',
              fontSize: '1.8rem'
            }}>
              Order List
            </h1>
            <TableComponent />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Orders;