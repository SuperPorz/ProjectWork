import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';

function TableComponent({ refresh, onOrderDeleted }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/orders')
        .then((response) => response.json())
        .then((data) => {
            setData(data);
            console.log(data);
        })
    }, [refresh]);

    function handleSubmit(e, orderID) {
        e.preventDefault();

        fetch('http://localhost:3000/orders', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: orderID
          }),
        })
        .then((response) => {
          console.log(response);
          if (response.status === 200 || response.status === 204) {
            alert('Order successfully deleted');
            onOrderDeleted(); // call the callback func. to update table
          }
        });
    }

    return(
       <Table striped bordered hover size="md">
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Customer Name</th>
          <th>Product</th>
          <th>Quantity</th>
          <th>Order date (DD/MM/YYYY)</th>
          <th>Action #1</th>
        </tr>
      </thead>
      <tbody>
        {
            data.map((item) => (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.customer}</td>
                    <td>{item.product}</td>
                    <td>{item.quantity}</td>
                    <td>{new Date(item.order_date).toLocaleDateString('it-IT')}</td>
                    <td>
                        <Form onSubmit={(e) => handleSubmit(e, item.id)}>
                            <input type="hidden" name="id" value={item.id}/>
                            <Button variant="danger" type="submit">
                                DELETE
                            </Button>
                        </Form>
                    </td>
                </tr>
            ))
        }
      </tbody>
    </Table>
    )
}

export default TableComponent;