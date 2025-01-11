// onChange = event handler used primarily with the form elements 
//            ex. <input> , <textarea> , <select> , <radio>
//            Triggers a function every time a value of the input change

import React,{useState} from "react";

function MyComponent(){
    
    const[name,setName]= useState("Guest");
    const[qunatity, setQuantity] = useState(1);
    const[comment, setComment] = useState("");
    const[payment, setPayment ]= useState("");
    const[shipping, setShipping] =useState("Select Shipping Method");

    function handleNameChange(event){
        setName(event.target.value);
    };

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    };

    function handleCommentChange(event){
         setComment(event.target.value);
    };

    function handlePaymentChange(event){
        setPayment(event.target.value);
    };

    function handleShippingChange(event){
        setShipping(event.target.value);
    };
    
    return(
        <>
            <div>
                <input value={name} placeholder="Enter Name" onChange={handleNameChange} />
                <p>Name: {name}</p><br /><br />

                <input type="number" value={qunatity} onChange={handleQuantityChange} />
                <p>Quanitity: {qunatity}</p><br /><br />

                <textarea value={comment} onChange={handleCommentChange} placeholder="Enter Delivery Instruction"> </textarea>
                <p> Comment: {comment} </p><br /><br />

                <select value={payment} onChange={handlePaymentChange}>
                    <option value="">Select Option</option>
                    <option value="Visa">Visa</option>
                    <option value="Master Card">Master Card</option>
                    <option value="Giftcard">Giftcard</option>
                </select>
                <p>Payment: {payment}</p><br /><br />

                <h3>Shipping Method</h3>
                <label>
                    <input type="radio" value="Pick Up" 
                            checked={shipping=== "Pick Up"}
                            onChange={handleShippingChange}/>
                    Pick Up
                </label><br />
                <label>
                <input type="radio" value="Delivery" 
                            checked={shipping=== "Delivery"}
                            onChange={handleShippingChange}/>
                    Delivery
                </label>
                <p>Shipping: {shipping}</p>

            </div>
        </>
    );

}

export default MyComponent;
