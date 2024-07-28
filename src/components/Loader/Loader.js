import React from 'react';
import './Loader.css';
import TokenOutlinedIcon from '@mui/icons-material/TokenOutlined';

export default function Loader() {
  return (
    <div className='loader-bg'>
        <div className='loader-content'>
            <h1>UWeather<TokenOutlinedIcon style={{fontSize: '55px'}}/></h1>
            <span>Confirm the request to receive Google data by your geolocation</span>
        </div>
        <div className='frame'>
          <div className="center">
              <div className="dot-1"></div>
              <div className="dot-2"></div>
              <div className="dot-3"></div>
          </div>
        </div>
    </div>
  )
}
