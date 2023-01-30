import React from 'react';
import './DailyWeather.css';

import WbCloudyOutlinedIcon from '@mui/icons-material/WbCloudyOutlined';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import InvertColorsOutlinedIcon from '@mui/icons-material/InvertColorsOutlined';
import EditLocationAltOutlinedIcon from '@mui/icons-material/EditLocationAltOutlined';

import OpacityOutlinedIcon from '@mui/icons-material/OpacityOutlined';
import WavesOutlinedIcon from '@mui/icons-material/WavesOutlined';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';

export default function DailyWeather() {
  return (
    <div className='info-side'>
        <div className='weather-more'>
            <div className='weather-more__item'>
            <h4><OpacityOutlinedIcon style={{fontSize: '18px'}}/>PRECIPITATION</h4>
            <span>0 %</span>
            </div>
            <div className='weather-more__item'>
            <h4><WavesOutlinedIcon style={{fontSize: '18px'}}/>HUMIDITY</h4>
            <span>34 %</span>
            </div>
            <div className='weather-more__item'>
            <h4><AirOutlinedIcon style={{fontSize: '18px'}}/>WIND</h4>
            <span>0 km/h</span>
            </div>
        </div>
        <div className='weather-week'>
            <div className='weather-week__item'>
            <WbCloudyOutlinedIcon />
            <h6>Tue</h6>
            <span>3°C</span>
            </div>
            <div className='weather-week__item'>
            <ThunderstormOutlinedIcon />
            <h6>Wed</h6>
            <span>4°C</span>
            </div>
            <div className='weather-week__item'>
            <InvertColorsOutlinedIcon />
            <h6>Thu</h6>
            <span>5°C</span>
            </div>
            <div className='weather-week__item'>
            <WbSunnyOutlinedIcon />
            <h6>Fri</h6>
            <span>7°C</span>
            </div>
        </div>
        <div className='toggle-container'>
          <button className='toggle-location'>Change location <EditLocationAltOutlinedIcon style={{fontSize: '16px'}}/></button>
        </div>
    </div>
  )
}
