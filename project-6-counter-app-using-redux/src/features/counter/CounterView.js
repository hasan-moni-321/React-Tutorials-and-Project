import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementbyamount } from './CounterSlice';



const CounterView = () => {
    const count = useSelector((state) => state.counter.count); 
    
    const dispatch = useDispatch(); 

  return (
    <div>
        <h2>count: {count}</h2>
        <button onClick={() => {dispatch(increment())}}>Increment</button>
        <button onClick={() => {dispatch(decrement())}}>Decrement</button>
        <button onClick={() => {dispatch(reset())}}>Reset</button> 
        <button onClick={() => {dispatch(incrementbyamount(5))}}>Incrementby5</button>
    </div>
  )
}

export default CounterView