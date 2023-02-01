// import { createContext, useState, useEffect } from 'react';

// export const DataContext = createContext();

// const API_KEY = 'baccda4f1d5019e8d22bd6c22787afb8';
// // const API_KEY = '8a97a40061eb1c0b2990430bed7e7999';

// export const WeatherContextProvider = ({ children }) => {

//     const [geo, setGeo] = useState({});
//     const [data, setData] = useState({});

//     useEffect(() => {

//       const getGeo = async () => {

//         navigator.geolocation.getCurrentPosition((success) => {
//            setGeo(success.coords);
//       })
//     };

//       getGeo();

//     //   lat=50.5020416&lon=30.4545792

//       const getWeather = async () => {
      
//         fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${geo.latitude}&lon=${geo.longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {
//         setData(data);
//         })
//     };
    
//         getWeather();

//     }, []);

// return (
//     <DataContext.Provider value={{data}}>
//       {children}
//     </DataContext.Provider>
//   );
// }

// /*


// */