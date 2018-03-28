import React from 'react';
import myCSS from './Person.css'
const Person = (props) => {

    return (
        <div className={myCSS.Person}>
        <p onClick={props.click}>I am {props.name} and I am {props.age} years old</p>
        <p>{props.children}</p>
        {/* two way binding */}
        <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
}

export default Person;