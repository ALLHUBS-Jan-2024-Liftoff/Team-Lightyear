import { Container, Table, Form, InputGroup } from "react-bootstrap"
import { getAllItems } from "../../services/ItemService";
import { useState, useEffect } from "react";

const SearchPage = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const data = await getAllItems();
      setItems(data);
    } catch (error) {
      setError("There was an error fetching the item data. Please try again.");
    }
  };

  return (
    <>
      <Container className="mt-5">
        <h1 className="text-center">Item Finder</h1>
        <Form className="mt-4">
          <InputGroup>
            <Form.Control 
              placeholder="Search items" 
              onChange={(e) => setSearch(e.target.value)}
            />
          </InputGroup>
        </Form>
        <Table striped bordered hover responsive className="mt-3">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Description</th>
              <th>Location</th>
              <th>Quantity</th>
              <th>Minimum Quantity</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
          {items.filter((item) => {
            const itemName = item.name.toLowerCase();
            const searchTerm = search.toLowerCase();
            return searchTerm === "" ? item : itemName.includes(searchTerm);
            }).map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.category.name}</td>
                <td>{item.description}</td>
                <td>{item.location}</td>
                <td>{item.quantity}</td>
                <td>{item.minQuantity}</td>
                <td>${item.price}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  )
}

export default SearchPage