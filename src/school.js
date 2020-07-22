import React from 'react';

function School (props){
    return(
    <div>
        <h1> I studied Rust and I love working on it.</h1>
    <h1>First I learned {props.langName} and {props.frameWork}. Currently I am learning Javascript and React.</h1>
    </div>   
    )
}

export default School;