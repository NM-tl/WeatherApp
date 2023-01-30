import React from 'react';
import './LocationList.css';

export default function LocationList() {
  return (
    <div className='locations-side'>
        <span>Previous locations:</span>
        <div className='weather-locations'>
            <span>Kyiv</span>
            <span>Kharkiv</span>
            <span>Odessa</span>
        </div>
    </div>
  )
}
