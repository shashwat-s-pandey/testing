import React, { useContext } from "react";
import ComponentC from "./componentC";
import { IdContext, userContext } from "../App";

const ComponentB = () => {

    const user = useContext(userContext)
    const id = useContext(IdContext)

    return (
        <div>
            {/* <ComponentC /> */}
            {user} - {id}
        </div>
    )
}

export default ComponentB;