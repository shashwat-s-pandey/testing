import React, { useState } from "react";

const UseStateHook3 = () => {
    // useState with object
    const [address, setAddress] = useState({city: "", country: ""});

    return (
        <div>
            <input
                type="text"
                value={address.city}
                onChange={e => setAddress({...address, city: e.target.value})}
            />
            <input
                type="text"
                value={address.country}
                onChange={e => setAddress({...address, country: e.target.value})}
            />
            <h2>City - {address.city}</h2>
            <h2>Country - {address.country}</h2>
        </div>
    )
}

export default UseStateHook3;