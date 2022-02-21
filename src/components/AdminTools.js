import React from 'react';
import AdminStock from './AdminStock';
import AdminApproval from './AdminApproval';
import AdminClassManager from './AdminClassManager';









function AdminTools(props) {
    
  const adminStatusString = props.user.admin.toString()
  function renderAdminIfAuth() {
    if (adminStatusString === "true") {
      return (
        <div>
          <div className='container p-5'>
            <h1 className='d-flex justify-content-center'>Stock Manager</h1>
            <AdminStock productList={props.toolList} />
            <AdminApproval />
            <AdminClassManager />
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