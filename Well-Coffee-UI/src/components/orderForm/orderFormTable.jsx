import { OrderFormItemRow } from "./orderFormItemRow";

export const OrderFormTable = ({ category, items, itemsInOrder }) => {
  return (
    <>
      <Accordion.Item eventKey="{category.id}">
        <Accordion.Header>{category.name}</Accordion.Header>
        <Accordion.Body>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Status</th>
                <th scope="col">Item Name</th>
                <th scope="col">Description</th>
                <th scope="col">Amazon PID</th>
                <th scope="col">Cost</th>
                <th scope="col">Quantity on Hand</th>
                <th scope="col">Order Quantity</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <OrderFormItemRow key={item.id} item={item} itemsInOrder={itemsInOrder} />
              ))}
            </tbody>
          </table>
        </Accordion.Body>
      </Accordion.Item>
    </>
  );
};
