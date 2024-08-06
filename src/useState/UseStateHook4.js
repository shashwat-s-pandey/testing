// useState with array

import React, { useState } from "react";

const UseStateHook4 = () => {

    const [fruits, setFruits] = useState([])
    const [fruitInput, setFruitInput] = useState('')

    const addFruit = () => {
        setFruits([...fruits, {id: fruits.length, value: fruitInput}])
        setFruitInput('')
    }

    return (
        <div>
            <input 
                type="text"
                value={fruitInput}
                onChange={e => setFruitInput(e.target.value)}
            />
            <button onClick={addFruit}>Add</button>
            <ul>
                {
                    fruits.map((fruit) => (
                        <li key={fruit.id}>{fruit.value}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default UseStateHook4;