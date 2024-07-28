import React from 'react'
import AccountForm from '../account/AccountForm'
import AccountsDisplay from '../account/AccountsDisplay'
import UpdateAccountModal from '../account/UpdateAccountModal'

const ManageEmployees = () => {
  return (
    <>
    <h1 className='text-center'>Manage Employees</h1>
    <AccountsDisplay />
    </>

  )
}

export default ManageEmployees