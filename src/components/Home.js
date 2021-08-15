import React,{useState} from 'react'
import {incrementValue,decrementValue} from "../ACTIONS";
import {useSelector,useDispatch} from "react-redux"; /// this hook actually makes possible to 



function Home() {
    /// we can accces the global state that we just created
   const state= useSelector(state=>state.counter);
   const dispatch=useDispatch();

    return (
        <div>
            
            <h1>{state}</h1>

<button   onClick={()=>dispatch(incrementValue())}>Increment</button>

<button onClick={()=>dispatch(decrementValue())}>Decrement</button>

        </div>
    )
}

export default Home
