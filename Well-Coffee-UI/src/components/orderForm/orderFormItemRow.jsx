import Button from "react-bootstrap/Button";


export const OrderFormItemRow = ({ item, itemsInOrder }) => {
  // const handleMinus = (e) => {
  //   if (itemsInOrder.has(e.target.controlId)) {

  //   }
  // };
  // const handlePlus = () => {};
  const handleChange = (e) => {
    if (e.target.value < 0) {
      // throw error and reset value to 0
      
    } else if (e.target.value == 0) {
      itemsInOrder.delete(e.target.id);
    } else if (e.target.value > 0) {
      itemsInOrder.set(e.target.id, e.target.value)
    }
  }

  return (
    <tr key={item.id}>
      <td>{item.name}</td>
      <td>{item.description}</td>
      <td>{item.amid}</td>
      <td>{item.cost}</td>
      <td>{item.quantity}</td>
      <td>
        {/* Using default up down arrows for now. Buttons on either side are complicated. */}
        {/* <Button variant="primary" onClick={} >-</Button>{" "} */}
        <Form.Group className="mb-3" controlId={item.id}>
          <Form.Control type="number" placeholder="0" onChange={(e) => handleChange(e)} />
        </Form.Group>
        {/* <Button variant="primary">+</Button>{" "} */}
      </td>
    </tr>
  );
};

// this.name = name;
// this.quantity = quantity;
// this.price = price;
// this.location = location;
// this.description = description;
// this.category = category;
