import React,{useState} from "react";

function ColorPicker(){

    const[color, setColor] = useState("#FFFFFF");

    function handleColorChange(event){
        setColor(event.target.value)
    }

    return(
        <div className="colorPickerContainer">
            <h2 className="h2">Color Picker</h2>
            <div className="colorDisplay" style={{backgroundColor: color}} >
                <p>Selected Color: {color}</p>
            </div>
            <label htmlFor="">Select Color:</label>
            <input type="color" value={color} onChange={handleColorChange}/>
        </div>
    );

}

export default ColorPicker;