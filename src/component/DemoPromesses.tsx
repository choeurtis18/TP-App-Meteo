import {useEffect, useState} from "react";


interface UserInterface {
    id: number,
    name: string
}

export default function DemoPromesses({city_name}: any) {
    const [city, setcity] = useState<UserInterface[]>([])
    
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=05157dd91179919e9b83a35eb4f54aa3`)
            .then(city => city.json())
            .then(data => {
             setcity(data)   
            })
    }, [])
    //city.main.temp
    const temp = Math.round(-273.15);
    return (
        <div className="container">
            <ul>
                <li className='city-name' key={city.id}>{city.name}</li>
                <li className='city-temp'>{temp}°C</li>
            </ul>
        </div>
    )
}
