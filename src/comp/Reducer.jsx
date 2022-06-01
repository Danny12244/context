import React,{useReducer} from 'react'

const reducer = (counter,{type})=>{
switch(type)
{
    case"Increment":{
        return counter+1
    }
    case"Decrement":{
        return counter -1
    }
    default :{
        return counter
    }
}
}

const Reducer = () => {
    const [counter, dispatch]=useReducer(reducer,0)
  return (
      <>
    <div>Counter:{counter}</div>
    <button onClick={() =>dispatch({type:"Decrement"})}>-</button>
    <button onClick={() =>dispatch({type:"Increment"})}>+</button>
      </>
  )
}

export default Reducer