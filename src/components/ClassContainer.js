import React, { useEffect, useState } from "react"
import ClassInformation from "./ClassInformation"
import ClassCard from "./ClassCard";

function ClassContainer(props) {

    return(
        <div>
            <div className="container"><ClassInformation /></div>
            
            <h1 className="container text-center p-5">Upcoming Classes</h1>

            {props && <div className="container mb-5"><ClassCard classList={props.classList} /></div>}

        </div>
    )
}

export default ClassContainer;