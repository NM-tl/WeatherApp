import React from 'react';
import './CurrentWeather.css';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';


export default function CurrentWeather( {data, season, date}) {

  const description = data.current.weather[0].description;
  const temp = data.current.feels_like;
  const timezone = data.timezone;

  let icon = 'http://openweathermap.org/img/wn//' + data.current.weather[0].icon + '@4x.png';

  return (
    <div className={'weather-side ' + season}>
        <div className='weather-location'>
            <h4>{date.toLocaleDateString('en-US', { weekday: 'long' })}</h4>
            <span>{date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <h6><LocationOnOutlinedIcon />{timezone}</h6>
        </div>
        <div className='weather-info'>
            <div className='weather-info__icon'>
              <img src={icon} alt="weather icon" />    
            </div>
            <h1>{Math.round(temp)}°C</h1>
            <h4>{description}</h4>
        </div>
    </div>
  )
}