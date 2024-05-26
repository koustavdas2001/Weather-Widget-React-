import { useState } from 'react'
import SearchBox from './SearchBox.jsx'
import InfoBox from "./infoBox.jsx"

export default function WeatherApp () {

    const [weatherInfo, setWeatherInfo] = useState({
        city: "Kolkata",
        feelsLike: 33.48,
        humidity: 89,
        temp: 27.97,
        tempMax: 27.97,
        tempMin: 27.97,
        weather: "overcast clouds",
    })

    let updateInfo = (result) => {
        setWeatherInfo(result);
    }

    return (
        <div style={{textAlign: "center"}}>
            <h1>Weather Widget</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}