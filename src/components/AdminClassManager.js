import React from "react";
import AdminCreateClass from "./AdminCreateClass";
import AdminClassList from "./AdminClassList"

function AdminClassManager(props) {
    return(
        <div>
            <div className='container p-5'>
                <h1 className='d-flex justify-content-center'>Create a Class</h1>
                <div>
                    <AdminCreateClass classList={props.classList} setClassList={props.setClassList}  />
                </div>
            </div>
            <div className='container p-5'>
                <h1 className='d-flex justify-content-center'>Manage a Class</h1>
                <div>
                    {props && <AdminClassList classList={props.classList} setClassList={props.setClassList} />}
                </div>
            </div>
        </div>      
    )
}

export default AdminClassManager;