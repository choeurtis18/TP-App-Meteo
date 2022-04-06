import {useEffect, useState} from "react";
import Country from "./Country";


const  UserInterface = {
    id: 0,
    name: "paris",
    temp: 0
}


export default function AddCountry() {
    const [city_item, setCity] = useState(UserInterface);
    const [temperature, setTemperature] = useState([]);
    const { id, name } = city_item;

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=69362119c364cadfe8544275921b83e9`)
            .then(response => response.json())
            .then(data => {
                //setCity({id: 0, name: name, temp: Math.round(data.main.temp-273.15)});  
            })
    }, [city_item]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCity((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setCity({id: 0, name: name, temp: 0});
    };


    return (
        <>
        <form className='form' onSubmit={onSubmit}>
            <label htmlFor="title" className="form-title">Country name</label>
            <input  type="text" 
                    className="form-input" 
                    id="name"
                    onChange={onChange} 
            />
            <button type="submit" className="form-btn btn btn-primary">Search Meteo</button>
        </form>
        <Country props={city_item}/>
        </>
    )
}