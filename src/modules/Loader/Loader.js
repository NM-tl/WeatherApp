import React from 'react';
import './Loader.css';
import TokenOutlinedIcon from '@mui/icons-material/TokenOutlined';

export default function Loader() {
  return (
    <div className='loader-bg'>
        <div className='loader-content'>
            <h1>UWeather<TokenOutlinedIcon style={{fontSize: '55px'}}/></h1>
        </div>
        <div class="frame">
          <div class="center">
              <div class="dot-1"></div>
              <div class="dot-2"></div>
              <div class="dot-3"></div>
          </div>
        </div>
    </div>
  )
}
