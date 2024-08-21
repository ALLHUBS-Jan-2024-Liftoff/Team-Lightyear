import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

const AccountPage = () => {

  function CurrentUser() {
    const [account, setAccount] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAccount = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/account", { withCredentials: true });
                setAccount(response.data);
            } catch (err) {
                setError(err.response?.data?.message || "Failed to fetch account");
            } finally {
                setLoading(false);
            }
        };

        fetchAccount();
    }, []);


  return (
    <div>
    <h1 className='text-center'>Manage Your Account</h1>
    {loading ? (
      <div>Loading...</div>
    ) : error ? (
      <div>Error: {error}</div>
    ) : account ? (
    <table className='account-table'>
      <thead>
        <tr>
          <th>User ID: {account.id}</th>
          <th>Email: {account.email}</th>
          <th>First Name: {account.firstName}</th>
          <th>Last Name: {account.lastName}</th>
          <th>Role {account.role}</th>
        </tr>
      </thead>
    </table>
    ) : null}
    </div>
  );
}
}

export default AccountPage