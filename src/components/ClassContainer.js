import React, { useEffect, useState } from "react"
import ClassInformation from "./ClassInformation"
import ClassCard from "./ClassCard";

function ClassContainer(props) {

    return(
        <div>
            <div className="container"><ClassInformation /></div>
            {/* <div className="container mb-5"><ClassCard classList={props.classList} /></div> */}

        </div>
    )
}

export default ClassContainer;