import React from 'react';
import AdminStock from './AdminStock';
import AdminApproval from './AdminApproval';









function AdminTools(props) {
    
  const adminStatusString = props.user.admin.toString()
  console.log(props.user)
  function renderAdminIfAuth() {
    if (adminStatusString === "true") {
      return (
        <div>
          <div className='container p-5'>
            <h1 className='d-flex justify-content-center'>Stock Manager</h1>
            <AdminStock productList={props.toolList} />
            <AdminApproval />
          </div>
            
        </div>
      )
    }else return null
  };

  return(
    <div>
          {renderAdminIfAuth(props)}
    </div>
  )
}


export default AdminTools;