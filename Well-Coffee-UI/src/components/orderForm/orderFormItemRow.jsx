import Button from "react-bootstrap/Button";


export const OrderFormItemRow = ({ item, index }) => {
 
  return (
    <tr key={index}>
      {/* <td>Status</td> */}
      <td>{item.name}</td>
      <td>{item.description}</td>
      {/* <td>{item.amid}</td> */}
      <td>{item.cost}</td>
      <td>{item.quantity}</td>
      <td>
        {/* Using default up down arrows for now. Buttons on either side are complicated. */}
        {/* <Button variant="primary" onClick={} >-</Button>{" "} */}
        <Form.Group className="mb-3" controlId="quantityOrdered">
          <Form.Control type="number" placeholder="0" onChange={(e) => handleChange(e)} />
        </Form.Group>
        {/* <Button variant="primary">+</Button>{" "} */}
      </td>
    </tr>
  );
};