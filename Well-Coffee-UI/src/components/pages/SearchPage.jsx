import { Container, Table, Form, InputGroup, Button, Row, Col } from "react-bootstrap"
import { searchItems } from "../../services/ItemService";
import { useState } from "react";

const SearchPage = () => {
  const [items, setItems] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setHasSearched(true);
    try {
      const results = await searchItems(searchKey);
      setItems(results);
    } catch (error) {
      console.error("Error during search: ", error)
    }
  };

  return (
    <>
      <Container className="mt-5">
        <h1 className="text-center">
          Item Search
        </h1>
        <div className="d-flex align-items-center mt-4">
          <Form className="d-flex flex-grow-1" onSubmit={handleSearch} id="searchItemForm">
            <InputGroup className="w-100">
              <Form.Control 
                type="text"
                value={searchKey}
                onChange={(e) => setSearchKey(e.target.value)}
                placeholder="Search for items..."
              />
            </InputGroup>
          </Form>    
          <Button className="ms-1" type="submit" form="searchItemForm">Search 🔎</Button>
        </div>
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
          {!hasSearched ? (
            <tr>
              <td colSpan="8" className="text-center">Start search</td>
            </tr> 
          ) : items.length === 0 ? (
            <tr>
              <td colSpan="8" className="text-center">No items found</td>
            </tr>
          ) : (
          items.map((item) => (
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
            ))
          )}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default SearchPage;