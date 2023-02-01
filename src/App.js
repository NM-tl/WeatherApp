import { useEffect, useState } from 'react';
import Layout from './common/Layout/Layout';
import Container from './common/Container/Container';
import CurrentWeather from './modules/CurrentWeather/CurrentWeather';
import DailyWeather from './modules/DailyWeather/DailyWeather';
import Loader from './modules/Loader/Loader';
import Header from './modules/Header/Header';
// import { DataContextProvider } from './data/Data';

// const API_KEY = 'baccda4f1d5019e8d22bd6c22787afb8';
const API_KEY = '8a97a40061eb1c0b2990430bed7e7999';

function App() {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {

      const getWeather = async () => {
      
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=50.5020416&lon=30.4545792&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {
        setData(data);
        })
    };
    
        getWeather();

    }, []);

    console.log(data)

  return (
    !loading ? 
      // <DataContextProvider>
      <Layout >
        <Header />
        <Container>
          <CurrentWeather />
          <DailyWeather />
        </Container>
      </Layout> :
      // </DataContextProvider> :
      <Loader />
  );
}

export default App;