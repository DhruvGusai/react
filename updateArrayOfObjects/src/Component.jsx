import React, { useState } from 'react';

function Component() {

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");


    function handleAddCar() {

        const newCar = {
            year: carYear,
            make: carMake,
            model: carModel
        }

        setCars(prevCar=>[...prevCar, newCar]);

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");

    }
    function handleRemoveCar(index) {

        setCars(prevCar => prevCar.filter((_, i) => i !== index));


    }
    function handleCarYear(event) {
        setCarYear(event.target.value);

    }
    function handleCarMake(event) {
        setCarMake(event.target.value);

    }
    function handleCarModel(event) {
        setCarModel(event.target.value);

    }



    return (<>
        <div>
            <h2>List Of Cars</h2>
            <ul>
                {cars.map((car, index) => <li key={index} onClick={() => handleRemoveCar(index)} > {car.year} {car.make} {car.model} </li>)}
            </ul>

            <input type="number" value={carYear} onChange={handleCarYear} /><br />
            <input type="text" value={carMake} placeholder="Enter Car Make" onChange={handleCarMake} /><br />
            <input type="text" value={carModel} placeholder="Enter Car Model" onChange={handleCarModel} /><br /><br />

            <button onClick={handleAddCar}>
                Add Car
            </button>
        </div>
    </>
    );

}

export default Component;