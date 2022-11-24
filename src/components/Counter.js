import React, { useState, useEffect } from "react";

function Counter(props){
    const [ count, setCount ] = useState(0)
    const [ user, setUser ] = useState({name: "israel dahan"})
    const [clock, setClock] = useState({date: new Date})

    useEffect(() => {
        const timerId = setInterval(clockHandle, 1000);
      }, []);
    
    const clockHandle = () => {
        setClock({date: new Date})
    }
    const countPlus = () => {
        setCount(count + 1)
    }
    return(
        <div>
            <p>This is Counter {count}</p>
            <button onClick={() => {countPlus()}} >+</button>
            <button onClick={() => {setCount(count-1)}} >-</button>
            <p>This is Name {user.name}</p>
            <button onClick={() => {setUser({name: "david"})}} >Set Name</button>
            <h1> {clock.date.toLocaleTimeString()}</h1>
        </div>
    )
}
export default Counter;