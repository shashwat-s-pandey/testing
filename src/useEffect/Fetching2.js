import React, { useEffect, useState } from "react";
import axios from 'axios';

const Fetching2 = () => {

    const [post, setPost] = useState({})
    const [id, setId] = useState(1)

    useEffect(()=> {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => {
            console.log(res);
            setPost(res.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [id])

    return (
        <div>
            <h2>Fetching2</h2>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <div>{post.title}</div>
        </div>
    )
}

export default Fetching2;