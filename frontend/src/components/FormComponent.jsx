import { FloatingLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormComponent() {
  return (
    <Form>

      <FloatingLabel
        controlId="floatingInput"
        label="Customer name & surname"
        className="mb-3 text-center">
        <Form.Control type="text" />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Product"
        className="mb-3 text-center">
        <Form.Control type="text" />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Quantity"
        className="mb-3 text-center">
        <Form.Control type="number" />
      </FloatingLabel>

      <div className="d-grid gap-2">
        <Button variant="primary" type="submit">
          Add order
        </Button>
      </div>
    </Form>
  );
}

export default FormComponent;