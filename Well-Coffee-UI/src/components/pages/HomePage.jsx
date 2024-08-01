import { useState, useEffect } from 'react';
import CategoryDisplay from '../home/CategoryDisplay';
import { Container } from 'react-bootstrap';
import AddCategoryModal from '../home/AddCategoryModal';
import AddItemModal from '../home/AddItemModal';
import { getAllCategories } from '../../services/CategoryService';

const HomePage = () => {
  const [categories, setCategories] = useState([]);

  // This hook calls fetchCategories to retrieve and display the category data
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const data = await getAllCategories();
      setCategories(data);
    } catch (error) {
      
    }
  };

  return (
    <>
      <CategoryDisplay categories={categories}/>
      <Container className='mt-3'>
        <AddCategoryModal />{' '}
        <AddItemModal />
      </Container>
    </>
  )
}

export default HomePage