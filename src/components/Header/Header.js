import React from 'react';
import './Header.css'
import TokenOutlinedIcon from '@mui/icons-material/TokenOutlined';

export default function Header() {
  return (
    <div className='header'>
        <h1>UWeather<TokenOutlinedIcon style={{fontSize: '55px'}}/></h1>
    </div>
  )
}
