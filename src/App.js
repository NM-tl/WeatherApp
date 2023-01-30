import { useEffect, useState } from 'react';
import Layout from './common/Layout/Layout';
import Container from './common/Container/Container';
import CurrentWeather from './modules/CurrentWeather/CurrentWeather';
import DailyWeather from './modules/DailyWeather/DailyWeather';
import Loader from './modules/Loader/Loader';
import Header from './modules/Header/Header';
// import { DataContextProvider } from './data/Data';

function App() {

  // const [geo, setGeo] = useState({});
  // const [data, setData] = useState({});


  // useEffect(() => {

  //   const getGeo = async () => {

  //     navigator.geolocation.getCurrentPosition((success) => {
  //        setGeo(success.coords);
          
  //     })};
  
  //   getGeo();
  //   }, []);


  //   console.log(geo)

  // useEffect(() => {

  //   const getWeather = async () => {
      
  //     fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${geo.latitude}&lon=${geo.longitude}&exclude=hourly,minutely&units=metric&appid=${KEY}`).then(res => res.json()).then(data => {
  //     setData(data);
      
  //     })
  //     };
  
  //     getWeather();
  //   }, []);

  //   console.log(data);


  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);


  return (
    !loading ? 
      <Layout >
        <Header />
        <Container>
          <CurrentWeather />
          <DailyWeather />
        </Container>
      </Layout> :
      <Loader />
  );
}

export default App;
