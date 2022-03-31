import React, { useEffect, useState } from 'react';
import AdminUserCard from './AdminUserCard';


function AdminApproval(props) {

  const [customers, setCustomers] = useState([])
  
  useEffect(() => {
    fetch("https://clarks-backend.herokuapp.com/")
    .then(response => response.json())
    .then(data => checkIfCustomersExists(data))
  }, []);

  function checkIfCustomersExists(data) {
    if (!!data) {
        setCustomers(data)
    }
}

  const userListFactory = () => {
    return customers.map(customer => {
        return (
          <AdminUserCard 
              key={customer.id}
              id={customer.id}
              name={customer.name}
              email={customer.email}
              licensed={customer.licenced}
              password={customer.password_digest}
              admin={customer.admin}
          />
        )
    }
    )
  }

    
    return (
        <div>
          <div className='container p-5'>
            <h1 className='d-flex justify-content-center'>Admin Approval</h1>
            {userListFactory()}
          </div>
        </div>
    )
}


export default AdminApproval;