import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from './store';

const App = () => {

    const counter = useSelector((state)=>state.counter)
    const dispatch = useDispatch()

    const inc =()=>{
        dispatch(actions.inc())
    }
     const dec =()=>{
        dispatch(actions.dec())
     }
    const add =()=>{
        dispatch(actions.add(10))
    }


    return (

        <div>
            <h2>count: {counter}</h2>
            <button onClick={inc}>inc</button>
           <button onClick={dec}>dec</button>
            <button onClick={add}>add 10</button>
        </div>
    );
};

export default App;