// props in functional component

import React from "react";

const Students1 = (props) => {

    // props are immutable
    // props.name = "XYZ";

    return(
        <div>
            <h1>Hello, {props.name}, roll no. {props.RollNo}</h1>
            {props.children}
        </div>
    )
}

export default Students1;