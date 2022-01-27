import React from 'react';
import AdminContainer from './AdminContainer';

function AdminTools(props) {
    return (
        <div>
          <div className='container'>
            <AdminContainer productList={props.productList} />
          </div>
            
        </div>
    )
}


export default AdminTools;