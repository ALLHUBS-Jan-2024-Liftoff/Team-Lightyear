import OrderFormItemModal from "./OrderFormItemModal";

const OrderFormItemRow = ({
  item,
  orderedItemsList,
  setOrderedItemsList,
  itemFormData,
  setItemFormData
}) => {
  return (
      <tr key={item.id}>
        {/* <td>Status</td> */}
        <td>{item.name}</td>
        <td>{item.description}</td>
        {/* <td>{item.amid}</td> */}
        <td>{item.price}</td>
        <td>{item.quantity}</td>
        <td>{item.minQuantity}</td>
        <td>
          <OrderFormItemModal
            key={item.id}
            item={item}
            orderedItemsList={orderedItemsList}
            setOrderedItemsList={setOrderedItemsList}
            itemFormData={itemFormData}
            setItemFormData={setItemFormData}
          />
        </td>
      </tr>
  );
};

export default OrderFormItemRow;
