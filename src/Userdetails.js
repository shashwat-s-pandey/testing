import React from "react";
import { useParams } from "react-router";

const Userdetails = () => {

    const params = useParams();

    const userId = params.userId;

    return (
        <div>
            User details of {userId}
        </div>
    )
}

export default Userdetails;