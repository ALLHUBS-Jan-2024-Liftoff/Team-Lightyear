import { useState, useEffect } from 'react';
import CategoryDisplay from '../home/CategoryDisplay';
import { Container } from 'react-bootstrap';
import AddCategoryModal from '../home/AddCategoryModal';
import AddItemModal from '../home/AddItemModal';
import { createCategory, getAllCategories } from '../../services/CategoryService';
import { createItem } from '../../services/ItemService';

const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [itemData, setItemData] = useState([]);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // This hook calls fetchCategories to retrieve and display initial data
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const data = await getAllCategories();
      setCategories(data);
    } catch (error) {
      setError("There was an error fetching the category data. Please try again.");
    }
  };

  // This function handles the process of adding a new category 
  const handleAddCategory = async (newCategory) => {
    setSuccess(false); // Resets success state before a new category is added
    setError(null); // Resets error state before a new category is added
    try {
      await createCategory(newCategory);
      setSuccess(true); // Sets success state to true and displays a message to the user
      fetchCategories();
    } catch (error) {
      // Error message will be displayed to the user if the category cannot be created
      setError("There was an error creating the category. Please try again.");
      setSuccess(false);
    }
  };

  //This function handles the process of adding a new item
  const handleAddItem = async (newItem) => {
    setSuccess(false);
    setError(null);
    try {
      await createItem(newItem);
      setSuccess(true);
      fetchCategories(); // Re-fetches the categories to display the updated data
    } catch (error) {
      setError("There was an error creating the item. Please try again.");
      setSuccess(false);
    }
  };

  // This function resets all messages and passes it to the child components
  const resetMessages = () => {
    setError(null);
    setSuccess(false);
  };

  return (
    <>
      <CategoryDisplay 
        categories={categories}
        fetchCategories={fetchCategories}
      />
      <Container className='mt-3'>
        <AddCategoryModal 
          onAddCategory={handleAddCategory} 
          resetMessages={resetMessages} 
          error={error} 
          success={success} 
        />{' '}
        <AddItemModal 
          onAddItem={handleAddItem}
          resetMessages={resetMessages}
          error={error}
          success={success}
          categories={categories}
        />
      </Container>
    </>
  );
}

export default HomePage;