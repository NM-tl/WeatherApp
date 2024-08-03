import React from 'react';
import Layout from './common/Layout/Layout';
import Container from './common/Container/Container';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import DailyWeather from './components/DailyWeather/DailyWeather';
import Loader from './components/Loader/Loader';
import Header from './components/Header/Header';
import Illustration from './components/Illustration/Illustration';
import useBackgroundImage from './helpers/useBackgroundCity';
import useSeason from './helpers/useSeason';
import useWeather from './helpers/useWeather';
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const { season, memoizedDate } = useSeason();
  const { loading, data } = useWeather(REACT_APP_API_KEY);
  const [city, setCity] = React.useState('');
  const backgroundImage = useBackgroundImage(city);

  React.useEffect(() => {
    if (data && data.timezone) {
      const cityName = data.timezone.split('/')[1].replace('_', ' ');
      setCity(cityName);
    }
  }, [data]);

  return (
    !loading ? 
      <Layout>
        <Illustration backgroundImage={backgroundImage} />
        <Header />
        <Container>
          <CurrentWeather data={data} season={season} date={memoizedDate} />
          <DailyWeather data={data} season={season} date={memoizedDate} />
        </Container>
      </Layout> :
      <Loader />
  );
}

export default App;
