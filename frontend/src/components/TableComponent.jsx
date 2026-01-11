import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';

function TableComponent() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/orders')
        .then((response) => response.json())
        .then((data) => {
            setData(data);
            console.log(data);
        })
    }, []);

    return(
       <Table striped bordered hover size="md">
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Cutomer Name</th>
          <th>Product</th>
          <th>Quantity</th>
          <th>Order date</th>
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
                </tr>
            ))
        }
      </tbody>
    </Table>
    )
}

export default TableComponent;