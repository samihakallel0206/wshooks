import React, { useEffect, useState } from 'react'

const Counter = () => {
//managing state
    const [counter, setCounter] = useState(0);
//sideEffect
useEffect(() => {
    console.log('component en vue')
    console.log('component updated')
    return () => {
        console.log('component die')
    };
},[]);

  return (
      <div>
          <button onClick={()=>setCounter(counter+1)}>Increment</button>
          <p>{counter}</p>
          <button onClick={()=>counter>0?setCounter(counter-1):0}>Decrement</button>
    </div>
  )
}

export default Counter