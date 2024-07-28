import React from 'react'
import CategoryDisplay from '../home/CategoryDisplay'
import { Container } from 'react-bootstrap'
import AddCategoryModal from '../home/AddCategoryModal'
import AddItemModal from '../home/AddItemModal'

const HomePage = () => {
  return (
    <>
      <CategoryDisplay />
      <Container className='mt-3'>
        <AddCategoryModal />{' '}
        <AddItemModal />
      </Container>
    </>
  )
}

export default HomePage