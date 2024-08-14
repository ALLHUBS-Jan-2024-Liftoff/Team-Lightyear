import { OrderFormItemRow } from "./OrderFormItemRow";

export const OrderFormTable = ({ categories }) => {
  return (
    <>
      {categories.length === 0 ? (
        <Accordion.Item>
          <Accordion.Header>No categories available</Accordion.Header>
          <Accordion.Body>
            <div>⬇️</div>
          </Accordion.Body>
        </Accordion.Item>
      ) : (
        categories.map(category => (
          <Accordion.Item key={category.id} eventKey={category.id.toString()}>
            <Accordion.Header>{category.name}</Accordion.Header>
            <Accordion.Body>
              {category.items.length == 0 ? (
                <div>No items available</div>
              ) : (
                <Table striped bordered hover responsive>
                  <thead>
                    <tr>
                      {/* <th scope="col">Status</th> */}
                      <th scope="col">Item Name</th>
                      <th scope="col">Description</th>
                      {/* <th scope="col">Amazon PID</th> */}
                      <th scope="col">Cost</th>
                      <th scope="col">Quantity on Hand</th>
                      <th scope="col">Order Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.items.map((item, index) => (
                      <OrderFormItemRow item={item} key={index} />
                    ))}
                  </tbody>
                </Table>
              )}
            </Accordion.Body>
          </Accordion.Item>
        ))
      )}
      ;
    </>
  );
};
