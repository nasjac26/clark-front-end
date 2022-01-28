import React from 'react';
import AdminStock from './AdminStock';
import AdminApproval from './AdminApproval';

function AdminTools(props) {
    return (
        <div>
          <div className='container p-5'>
            <h1 className='d-flex justify-content-center'>Stock Manager</h1>
            <AdminStock productList={props.productList} />
            <AdminApproval />
          </div>
            
        </div>
    )
}


export default AdminTools;