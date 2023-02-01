import React, { useContext, useEffect, useState } from 'react';
import './CurrentWeather.css';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
// import { DataContext } from '../../weatherContext';

export default function CurrentWeather() {

  // const data = useContext(DataContext);
  // const { description } = data.data.current.weather[0].description;
  // const { feels_like } = data.data.current;
  // const { timezone } = data.data;
  // const date = new Date();  

  const [staticWeather, setStaticWeather] = useState({
    day: 'Tuesday',
    date: '1.02.2023',
    city: 'Europe/Kyiv',
    icon: 'icon',
    temp: '-2',
    description: 'clouds',
  })

  // let icon = 'http://openweathermap.org/img/wn//' + data.data.current.weather[0].icon + '@4x.png';


  return (
    <div className='weather-side'>
        <div className='weather-location'>
            {/* <h4>{date.toLocaleDateString('en-US', { weekday: 'long' })}</h4>
            <span>{date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <h6><LocationOnOutlinedIcon />{timezone}</h6> */}
            <h4>{staticWeather.day}</h4>
            <span>{staticWeather.date}</span>
            <h6><LocationOnOutlinedIcon />{staticWeather.city}</h6>
        </div>
        <div className='weather-info'>
            <div className='weather-info__icon'>
              <img src={staticWeather.icon} alt="weather icon" />    
            </div>
            <h1>{staticWeather.temp}°C</h1>
            <h4>{staticWeather.description}</h4>
        </div>
    </div>
  )
}
