import React,{useState} from "react";

function MyComponent(){

    const[foods, setFood] = useState(["Apple","Banana","Orange"]);

    function handleAddFood(){

        const addFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFood( [...foods, addFood] );


    };

    function handleRemoveFood(index){
      setFood(foods.filter((_,i)=> i!==index ));

    }

    


    return(<>
    <div>
        <h3>List of Foods</h3>
        <ul>
            {foods.map((food, index) => <li key={index} onClick={()=>handleRemoveFood(index)} > {food} </li>)}
        </ul>
        <input type="text " id="foodInput" placeholder="Enter Food Name" /><br /><br />
        <button onClick={handleAddFood}> Add </button><br /><br />
        <button >Remove</button>
    </div>
    
    </>);

}

export default MyComponent;