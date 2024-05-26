import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}) {

    let HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let RAIN_URL = "https://images.unsplash.com/photo-1493314894560-5c412a56c17c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="infoBox">
      <div className="infoContainer">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            info.humidity > 80 ? RAIN_URL 
            : info.temp > 15 ? HOT_URL 
            : COLD_URL
          }
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city} {
            info.humidity > 80 ? <ThunderstormIcon/>
            : info.temp > 15 ? <WbSunnyIcon/>
            : <AcUnitIcon/>
          }
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
            <p>Temperature: {info.temp}°C</p>
            <p>Humidity: {info.humidity}%</p>
            <p>Temp Max: {info.tempMax}°C</p>
            <p>Temp Min: {info.tempMin}°C</p>
            <p>Weather can be described as {info.weather} that feels like {info.feelsLike}°C</p>
          </Typography>
        </CardContent>
      </Card>
      </div>   
    </div>
  );
}
