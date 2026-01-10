import { Col, Row, Stack } from "react-bootstrap";
import FormComponent from "./FormComponent";
import TableComponent from "./TableComponent";

function Orders () {
  return (
    <>
      <Row className="justify-content-md-center">
        <Col lg="3"></Col>
        <Col md="6">
          <h1><i>PLACE ORDER</i></h1>
          <FormComponent />
        </Col>
        <Col lg="3"></Col>
      </Row>

      <Row className="justify-content-md-center">
        <Col lg="3"></Col>
        <Col md="6">
          <h1><i>ORDER LIST</i></h1>
          <TableComponent />
        </Col>
        <Col lg="3"></Col>
      </Row>
    </>
  )
}

export default Orders;