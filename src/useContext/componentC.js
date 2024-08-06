import React from "react";
import { IdContext, userContext } from "../App";

const ComponentC = () => {
    return (
        <div>
            <userContext.Consumer>
                {
                    user => {
                        return (
                            <IdContext.Consumer>
                                {
                                    id => {
                                        return (
                                            <div>UserContext value {user}, IdContext value {id}</div>
                                        )
                                    }
                                }
                            </IdContext.Consumer>
                        )
                    }
                }
            </userContext.Consumer>
        </div>
    )
}

export default ComponentC;