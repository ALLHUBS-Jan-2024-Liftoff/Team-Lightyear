import { useState, useEffect } from "react";
import { getItemById } from "../../services/ItemService";

const ItemDetail = ({
  orderedItem,
  index,
  itemIdsOrdered,
  setMessage,
  setError,
}) => {
  const [item, setItem] = useState({
    id: null,
    name: "",
    quantity: null,
    minQuantity: null,
    price: null,
    location: "",
    description: "",
    comment: "",
    amazonProductId: "",
    image: "",
    category: {
      id: null,
      name: "",
      dateCreated: "",
    },
  });

  const fetchItemById = async id => {
    try {
      const data = await getItemById(id);
      setItem(data);
    } catch (error) {
      setError(true);
      setMessage("There was an error fetching the item. Please try again.");
    }
  };

  // Set the item using the index from mapping through the OrderedItemsList.  The orderedItemList and the ItemIdsOrdered list are arrays of the same length and are passed in the same order.
  useEffect(() => {
    fetchItemById(itemIdsOrdered[index]);
  }, []);

  return (
    <tbody>
      <tr>
        <td>{item?.name}</td>
        <td>{orderedItem.itemCost}</td>
        <td>{orderedItem.quantityOrdered}</td>
      </tr>
    </tbody>
  );
};

export default ItemDetail;
