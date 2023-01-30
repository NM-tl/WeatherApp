import { useContext, createContext, useState } from 'react';

const DataContext = createContext();
const KEY = "b98f2d3b7b75f9a4636f70fd1d0ab72c";

export const DataContextProvider = ({ children }) => {

    const [data, setData] = useState({});

    const getWeatherData = () => {
    navigator.geolocation.getCurrentPosition((success) => {
        
        let {latitude, longitude } = success.coords;

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${KEY}`).then(res => res.json()).then(data => {
        setData(data);
        console.log(data)
        })
    })

}
return (
    <DataContext.Provider value={{data}}>
      {children}
    </DataContext.Provider>
  );

}