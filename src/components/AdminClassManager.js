import React from "react";
import AdminCreateClass from "./AdminCreateClass";

function AdminClassManager() {
    return(
        <div>
            <div className='container p-5'>
                <h1 className='d-flex justify-content-center'>Create a Class</h1>
                <div>
                    <AdminCreateClass />
                </div>
            </div>
            <div className='container p-5'>
                <h1 className='d-flex justify-content-center'>Manage a Class</h1>
            </div>
        </div>
       
    )
}

export default AdminClassManager;