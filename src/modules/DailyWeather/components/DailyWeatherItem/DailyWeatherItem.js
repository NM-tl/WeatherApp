import React from 'react';
import './DailyWeatherItem.css';
import Moment from 'react-moment';
import 'moment-timezone';

export default function DailyWeatherItem( {data, season} ) {
  
  return (
    <>
      { data.daily.map((day) => {
        let dateToFormat = day.dt;
        let icon = 'http://openweathermap.org/img/wn//' + day.weather[0].icon + '@2x.png';
        
        return <div className='weather-week__item'>
          <h6>{<Moment format='dddd' unix>{dateToFormat}</Moment>}</h6>
          <img src={icon} alt="weather icon" className={'item-icon ' + season} />
          <div className='item-row'>
            <span className='item-row__title'>Night</span>
            <span className='item-row__value'>{day.feels_like.night}°C</span>
          </div>
          <div className='item-row'>
            <span className='item-row__title'>Day</span>
            <span className='item-row__value'>{day.feels_like.night}°C</span>
          </div>
        </div>
      })
    }
    </>
  )
}