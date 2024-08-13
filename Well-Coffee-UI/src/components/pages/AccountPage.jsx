import React from 'react'
import { useState } from 'react'

const AccountPage = () => {
  return (
    <div className='account-page'>
    <h1 className='text-center'>Manage Your Account</h1>
    
    

    <table class='account-table'>
      <thead>
        <tr>
          <th>User ID</th>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Role</th>
        </tr>
      </thead>
    </table>
    </div>
  )
}

export default AccountPage