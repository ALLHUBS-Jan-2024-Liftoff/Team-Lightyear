import OrderFormItemRow from "./OrderFormItemRow";
import { Accordion, Table } from "react-bootstrap";

const OrderFormTable = ({
  categories,
  orderedItemsList,
  setOrderedItemsList,
  resetMessages,
  error,
  success,
  itemFormData,
  setItemFormData,
}) => {
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
          <Accordion.Item key={category.id} eventKey={category.id}>
            <Accordion.Header>{category.name}</Accordion.Header>
            <Accordion.Body>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th scope="col">Status</th>
                    <th scope="col">Item Name</th>
                    <th scope="col">Description</th>
                    {/* <th scope="col">Amazon PID</th> */}
                    <th scope="col">Cost</th>
                    <th scope="col">Quantity on Hand</th>
                    <th scope="col">Order Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {category.items.map(item => (
                    <OrderFormItemRow
                      key={item.id}
                      item={item}
                      orderedItemsList={orderedItemsList}
                      setOrderedItemsList={setOrderedItemsList}
                      itemFormData={itemFormData}
                      setItemFormData={setItemFormData}
                      resetMessages={resetMessages}
                      error={error}
                      success={success}
                    />
                  ))}
                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>
        ))
      )}
    </>
  );
};

export default OrderFormTable;
