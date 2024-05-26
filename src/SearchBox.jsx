import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox ({updateInfo}) {

    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "28f0610ec094f5c8f8c74100ce262be9";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(
                `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
            )
            let jsonResponse = await response.json();
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                feelsLike: jsonResponse.main.feels_like,
                humidity: jsonResponse.main.humidity,
                weather: jsonResponse.weather[0].description,
            }
            return result;
        }
        catch(err) {
            throw err;
        }
    }

    let handleChange = (event) => {
        setCity(event.target.value);
    }
    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            setCity("");
           let newInfo = await getWeatherInfo();
           updateInfo(newInfo);
        }
        catch {
            setError(true);
        }

    }

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
            <TextField id="outlined-basic" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
            <br /><br />
            <Button variant="contained" type="submit">Search</Button>
            {error && <p style={{color: "red"}}>No such place exits!</p> }
            </form>
        </div>
    )
}