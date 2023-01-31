import React, { useContext } from 'react';
import './CurrentWeather.css';
import { DataContext } from '../../data/Data';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

export default function CurrentWeather() {

  const data = useContext(DataContext);
  const { description } = data.data.current.weather[0];
  const { feels_like } = data.data.current;
  const { timezone } = data.data;
  const date = new Date();

  let icon = 'http://openweathermap.org/img/wn//' + data.data.current.weather[0].icon + '@4x.png';

  return (
    <div className='weather-side'>
        <div className='weather-location'>
            <h4>{date.toLocaleDateString('en-US', { weekday: 'long' })}</h4>
            <span>{date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <h6><LocationOnOutlinedIcon />{timezone}</h6>
        </div>
        <div className='weather-info'>
            <div className='weather-info__icon'>
              <img src={icon} alt="weather icon" />    
            </div>
            <h1>{Math.round(feels_like)}°C</h1>
            <h4>{description}</h4>
        </div>
    </div>
  )
}
