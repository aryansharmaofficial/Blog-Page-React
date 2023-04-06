import { useState } from "react";

function Counterstatefunction (){
    const[counter,setcounter] = useState(0);
    
    const increment = () =>{
        setcounter(counter+1);
    }

    const decrement = () =>{
        setcounter(counter-1);
    }

    return(
        <>
            <h1> Counter: {counter} </h1>
            <button onClick={increment}> Counter With Function click me </button>
            <button onClick={decrement}> Decount With Function click me </button>
        </>
    )
}

export default Counterstatefunction;