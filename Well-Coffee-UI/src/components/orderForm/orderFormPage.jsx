import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { fetchItems } from "../../services/ItemService";
import { fetchCategories } from "../../services/CategoryService";
import { OrderFormTable } from "./orderFormTable.jsx";
import Accordion from "react-bootstrap/Accordion";

const DisplayItems = () => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const itemsInOrder = new Map();

  //   const addItem = (itemId, quantity) => {
  //     itemsInOrder.set(itemId, quantity);
  // }

  //     const deleteItem = (itemId) => {
  //         itemsInOrder.delete(itemId);
  //     }

  useEffect(() => {
    // Fetch all items when the component mounts
    fetchItems()
      .then(setItems)
      .catch(error => {
        console.error("There was an error fetching the items!", error);
      });
  }, []);

  useEffect(() => {
    // Fetch all categories when the component mounts
    fetchCategories()
      .then(setCategories)
      .catch(error => {
        console.error("There was an error fetching the categories!", error);
      });
  }, []);

  const filterItems = (category, items) => {
    let filteredItems = [];
    items.map(item => {
      if (item.category == category) {
        filteredItems.push(item);
      }
    });
    return filteredItems;
  };

  return (
    <Form>
      <Accordion defaultActiveKey="0">
        {categories.map(category => (
          <OrderFormTable
            key={category.id}
            category={category}
            items={filterItems(category, items)}
            itemsInOrder={itemsInOrder}
          />
        ))}
      </Accordion>
    </Form>
  );
};

export default displayItems;
