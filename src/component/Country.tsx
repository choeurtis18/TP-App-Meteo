export default function Country({props}) {
    return (
        <div className="card">
            <li className='city-name'>{props.name}</li>
            <li className='city-temp'>{props.temp}°C</li>
        </div>
    )
}