import React, { useContext } from 'react';
import './DailyWeather.css';
import { DataContext } from '../../data/Data';

import EditLocationAltOutlinedIcon from '@mui/icons-material/EditLocationAltOutlined';
import OpacityOutlinedIcon from '@mui/icons-material/OpacityOutlined';
import WavesOutlinedIcon from '@mui/icons-material/WavesOutlined';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import DailyWeatherItem from './components/DailyWeatherItem/DailyWeatherItem';

export default function DailyWeather() {

  const data = useContext(DataContext);
  const { humidity, pressure, wind_speed } = data.data.current;

  return (
    <div className='info-side'>
        <div className='weather-more'>
            <div className='weather-more__item'>
            <h4><OpacityOutlinedIcon style={{fontSize: '18px'}}/>PRECIPITATION</h4>
            <span>{pressure}</span>
            </div>
            <div className='weather-more__item'>
            <h4><WavesOutlinedIcon style={{fontSize: '18px'}}/>HUMIDITY</h4>
            <span>{humidity}%</span>
            </div>
            <div className='weather-more__item'>
            <h4><AirOutlinedIcon style={{fontSize: '18px'}}/>WIND</h4>
            <span>{wind_speed} km/h</span>
            </div>
        </div>
        <div className='weather-week'>
          <DailyWeatherItem />
        </div>
        <div className='toggle-container'>
          <button className='toggle-location'>Change location <EditLocationAltOutlinedIcon style={{fontSize: '16px'}}/></button>
        </div>
    </div>
  )
}
