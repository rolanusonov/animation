import React from 'react';
import {useState} from "react";

const Meat = () => {
    const [counter, setCounter] = useState(0)
const [isAdd, setIsAdd] = useState(false)
    const increment = () => {
        setCounter(counter +1)
        setIsAdd(true)
    }
    // const increment = () =>{
    //     setCounter(counter +1)
    // }
    const decrement = () =>{
        setCounter(counter -1)
    }

    return (
        <div className="container">
         <button onClick={increment}>+1</button>
            <span>{counter}</span>
            <button className= {` ${isAdd ? "btn-danger":""}`} onClick={decrement}>{isAdd ? "вычесть":"кемитуу"}</button>
        </div>
    );
};

export default Meat;