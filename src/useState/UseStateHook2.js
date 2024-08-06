import React, { useState } from "react";

const UseStateHook2 = () => {

    const initMarks = 0;
    const [marks, setMarks] = useState(0);

    const incrementFive = () => {
        for(let i=0; i<5; i++) {
            setMarks(previousMarks => previousMarks + 1) 
        }
    }

    return (
        <div>
            <h1>2nd Hook</h1>
            <h2>Marks = {marks}</h2>
            <button onClick={()=> setMarks(previousMarks => previousMarks + 1)}>Increment</button>
            <button onClick={()=> setMarks(previousMarks => previousMarks - 1)}>Dncrement</button>
            <button onClick={()=> setMarks(initMarks)}>Reset</button>
            
            <button onClick={incrementFive}>IncrementFive</button>
        </div>
    )
}

export default UseStateHook2;