/*

useEffect()= React hook that tells React DO SOME CODE WHEN(pick one):
             This component re-renders
             This component mounts
             The state of value



useEffect(function, [dependencies]);

1. useEffect( () => {} )             // Runs after every re-render     
2. useEffect( ()=>{} , [] )          // Runs only on mount
3. useEffect( ()=> {} [value])       // Runs on mount + when value changes

USES 

#1 Event Listeners 
#2 DOM manipulation
#3 Subscriptions (ReaTime updates)
#4 Fetching data from an api
#5 clean up when components un-mounted


*/

import React,{useEffect,useState} from "react";

function MyComponent(){

    const [count,setCount] = useState(0);
    const[color,setColor]=useState("green");

    useEffect(()=>{
        document.title=`Counter: ${count} ${color}`;
    },[count,color])

    function addCount(){
        setCount(c => c+1);
    }
    function subtractCount(){
        setCount(c => c-1);
    }
    function changeColor(){
        setColor( c=> c==="green" ? "red" : "green" );
        
    }


    return(
        <>
            <div>
                <p  style={{color: color}}>Count: {count}</p>
                <button onClick={addCount}>Add</button>
                <button onClick={subtractCount}>Subtract</button><br />
                <button onClick={changeColor}>Change Color</button>
            </div>
        </>
    );



}

export default MyComponent;