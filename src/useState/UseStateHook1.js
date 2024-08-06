import React, { useState } from "react";

const UseStateHook1 = () => {

    const [marks, setMarks] = useState(7);

    return (
        <div>
            <h1>UseState Hook</h1>
            <h1>Marks = {marks}</h1>
            <button onClick={()=>setMarks(marks + 1)}>Increment</button>
        </div>
    )
}

export default UseStateHook1;