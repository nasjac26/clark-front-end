import React, { useEffect, useState } from "react"
import ClassInformation from "./ClassInformation"
import ClassCard from "./ClassCard";

function ClassContainer({classList}) {

  

    console.log(classList)


    return(
        <div>
            <div className="container"><ClassInformation /></div>
            <div className="container mb-5"><ClassCard classList={classList} /></div>

        </div>
    )
}

export default ClassContainer;