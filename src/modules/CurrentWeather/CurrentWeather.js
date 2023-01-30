import React from 'react';
import './CurrentWeather.css';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';

export default function CurrentWeather() {
  return (
    <div className='weather-side'>
        <div className='weather-location'>
            <h4>Monday</h4>
            <span>30 Jan 2023</span>
            <h6><LocationOnOutlinedIcon />Kyiv, UA</h6>
        </div>
        <div className='weather-info'>
            <div className='weather-info__icon'>
              <WbSunnyOutlinedIcon style={{fontSize: '64px'}} />
            </div>
            <h1>2°C</h1>
            <h4>Sunny</h4>
        </div>
    </div>
  )
}
