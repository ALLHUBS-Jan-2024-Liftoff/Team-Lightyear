import React from 'react'

const AccountPage = () => {
  return (
    <div className='account-page'>
    <h1>AccountPage</h1>
    
    {/* UserAccount table */}
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