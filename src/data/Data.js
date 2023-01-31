import { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

export const DataContextProvider = ({children}) => {

    // const [geo, setGeo] = useState({});
    const [data, setData] = useState({});

const API_KEY = 'baccda4f1d5019e8d22bd6c22787afb8';

    useEffect(() => {

    //   const getGeo = async () => {

    //     navigator.geolocation.getCurrentPosition((success) => {
    //        setGeo(success.coords);

    //        console.log(success)
            
    //   })
    // };
    
      // getGeo();

      const getWeather = async () => {
      
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=50.5020416&lon=30.4545792&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {
        setData(data);
        })
    };
    
        getWeather();

    }, []);

return (
    <DataContext.Provider value={{data}}>
      {children}
    </DataContext.Provider>
  );

}