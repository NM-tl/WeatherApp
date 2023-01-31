import { useEffect, useState } from 'react';
import Layout from './common/Layout/Layout';
import Container from './common/Container/Container';
import CurrentWeather from './modules/CurrentWeather/CurrentWeather';
import DailyWeather from './modules/DailyWeather/DailyWeather';
import Loader from './modules/Loader/Loader';
import Header from './modules/Header/Header';
import { DataContextProvider } from './data/Data';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    !loading ? 
      <DataContextProvider>
      <Layout >
        <Header />
        <Container>
          <CurrentWeather />
          <DailyWeather />
        </Container>
      </Layout> 
      </DataContextProvider> :
      <Loader />
  );
}

export default App;
