import { useState } from 'react'

export function Counter(){
    const [count, setCount] = useState(0);

    return (
    <>
        <h2>{count}</h2>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>setCount(count===0 ? count : count-1)}>-</button>
    </>
)
}

