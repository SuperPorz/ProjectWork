import { FloatingLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function FormComponent() {
  const [customer, setCustomer] = useState('');
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    fetch('http://localhost:3000/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        customer: customer,
        product: product,
        quantity: quantity,
      }),
    })
    .then((response) => {
      console.log(response);
      if (response.status === 200 || response.status === 201) {
        setCustomer('');
        setProduct('');
        setQuantity('');
        alert('Order successfully added');
      }
    });
  }

  return (
    <Form onSubmit={handleSubmit}>

      <FloatingLabel
        controlId="floatingInput1"
        label="Customer name & surname"
        className="mb-3 text-center">
        <Form.Control
          type="text"
          value={customer}
          onChange={(e) => setCustomer(e.target.value)}
        />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput2"
        label="Product"
        className="mb-3 text-center">
        <Form.Control
          type="text"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput3"
        label="Quantity"
        className="mb-3 text-center">
        <Form.Control
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
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