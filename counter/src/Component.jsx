import React, {useState} from 'react';

function Component(){

    let [name, setname] = useState("Guest");
    let[age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName= () => {

        setname("Dhruv");

        //name ="Dhruv";
       // console.log(name) // its updates in console but not in DOM
    }

    const incrementAge = () => {
         setAge(age+1);
    }
    
    const toggleEmployedState = () =>{
        setIsEmployed(!isEmployed);
    }

    return( 
    <> 
        <div>
            <p> Name: {name}</p>
            <button onClick={updateName} >Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}> INCREMENT AGE</button>

            <p>Is Employed: {isEmployed ? "yes" : " no"}</p>
            <button onClick={toggleEmployedState}>Toggle Employed State</button>
        </div>
    </>
    );


}

export default Component;