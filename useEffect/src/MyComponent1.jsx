import React, { useState, useEffect } from "react";

function MyComponent1() {

    const[width,setWidth]=useState(window.innerWidth);
    const[height,setHeight]=useState(window.innerHeight);

    useEffect(()=>{
        window.addEventListener("resize",handleResize);
        console.log("EVENT LISTNER IS ADDED");

        return( ()=>{
            window.removeEventListener("resize",handleResize);
            console.log("EVENT LISTNER IS REMOVED")
        } );
    },[]);

    useEffect( ()=>{
        document.title=`size ${height}x${width}`;
    },);
    
    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return (<>
        <p>Window Width:{width}px</p>
        <p>Window Heigth:{height}px</p>
    </>)
}

export default MyComponent1;  