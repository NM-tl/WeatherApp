import React from 'react';
import './DailyWeather.css';

import OpacityOutlinedIcon from '@mui/icons-material/OpacityOutlined';
import WavesOutlinedIcon from '@mui/icons-material/WavesOutlined';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DailyWeatherItem from './components/DailyWeatherItem/DailyWeatherItem';

export default function DailyWeather( {data, season} ) {

  const pressure = data.current.pressure;
  const humidity = data.current.humidity;
  const wind_speed = data.current.wind_speed;
  const ui = data.current.uvi;

  return (
    <div className='info-side'>
        <div className='weather-more'>
            <div className='weather-more__item'>
            <h4><OpacityOutlinedIcon style={{fontSize: '18px'}}/>PRECIPITATION</h4>
            <span>{pressure}</span>
            </div>
            <div className='weather-more__item'>
            <h4><WavesOutlinedIcon style={{fontSize: '18px'}}/>HUMIDITY</h4>
            <span>{Math.round(humidity)}%</span>
            </div>
            <div className='weather-more__item'>
            <h4><AirOutlinedIcon style={{fontSize: '18px'}}/>WIND</h4>
            <span>{Math.round(wind_speed)}km/h</span>
            </div>
            <div className='weather-more__item'>
            <h4><WbSunnyIcon style={{fontSize: '18px'}}/>UV index</h4>
            <span>{ui}</span>
            </div>
        </div>
        <div className='weather-week'>
          <DailyWeatherItem data = {data} season = {season}/>
        </div>
    </div>
  )
}