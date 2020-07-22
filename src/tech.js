import React from 'react';

function Tech (props) {
    return(
        <div>
            <h1>I really love learning new stuff related Software Development and {props.ml} </h1>
            <h4>First I learned {props.langName}</h4>
            <h4>Now I am learning {props.langName2} and {props.langName3}  </h4>

        </div>
    );
}

export default Tech;