import { useEffect, useState, useMemo } from 'react';
import Layout from './common/Layout/Layout';
import Container from './common/Container/Container';
import CurrentWeather from './modules/CurrentWeather/CurrentWeather';
import DailyWeather from './modules/DailyWeather/DailyWeather';
import Loader from './modules/Loader/Loader';
import Header from './modules/Header/Header';

const API_KEY = 'baccda4f1d5019e8d22bd6c22787afb8';

function App() {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [season, setSeason] = useState('');

  const memoizedDate = useMemo(() => new Date(), [])

  useEffect(() => {

    let currMonthNumber = memoizedDate.getMonth(); 

    if (currMonthNumber >= 5 && currMonthNumber <= 7) {
      setSeason('summer');
    } else if (currMonthNumber >= 8 && currMonthNumber <= 10) {
      setSeason('autumn');
    } else if (currMonthNumber >= 2 && currMonthNumber <= 4) {
      setSeason('spring');
    } else {
      setSeason('winter');
    }

    const getWeather = async () => {

      navigator.geolocation.getCurrentPosition((success) => {

        let {latitude, longitude } = success.coords;

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {

        setData(data);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      })
    })    
    };
    
    getWeather();

    }, [memoizedDate]);

  return (
    !loading ? 
      <Layout >
        <Header />
        <Container>
          <CurrentWeather data = {data} season = {season} date = {memoizedDate}/>
          <DailyWeather data = {data} season = {season} date = {memoizedDate} />
        </Container>
      </Layout> :
      <Loader />
  );
}

export default App;