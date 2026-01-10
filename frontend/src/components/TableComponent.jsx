import Table from 'react-bootstrap/Table';

function TableComponent() {
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
        <tr>
          <td>1</td>
          <td>Mark Fluttenmberg</td>
          <td>table</td>
          <td>1</td>
          <td>12/04/2025</td>
        </tr>
        <tr>
          <td>2</td>
          <td>John Bondi</td>
          <td>t-shirt</td>
          <td>4</td>
          <td>26/09/2025</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Lina Rosalia</td>
          <td>oil bottle</td>
          <td>5</td>
          <td>03/01/2026</td>
        </tr>
      </tbody>
    </Table>
    )
}

export default TableComponent;