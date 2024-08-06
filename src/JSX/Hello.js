import React from "react";

const Hello = () => {
    // return(
    //     <div>
    //         <h1>Hello everyone</h1>
    //     </div>
    // )

    // return React.createElement('div', null, 'h1', 'Hello everyone');

    // return React.createElement('div', null, 
    //     React.createElement('h1', null, 'hello everyone')
    // );

    return React.createElement('div', null, 
        React.createElement('h1', {className: 'helloclass', id: 'hello'}, 'hello everyone')
    );
}

export default Hello;