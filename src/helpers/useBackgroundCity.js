import { useEffect, useState } from 'react';
const UNSPLASH_ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

const useBackgroundImage = (city) => {
  const [backgroundImage, setBackgroundImage] = useState('');
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    if (city && UNSPLASH_ACCESS_KEY) {
      const currentHour = new Date().getHours();
      const isPM = currentHour >= 12;
      const query = isPM ? `${city} city night` : `${city} city`;

      console.log(query);

      fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${UNSPLASH_ACCESS_KEY}`)
        .then(res => res.json())
        .then(data => {
          const urls = data.results.map(result => result.urls.full);
          setImageUrls(urls);
        })
        .catch(error => console.error('Error fetching image:', error));
    }
  }, [city]);

  useEffect(() => {
    if (imageUrls.length > 0) {
      const randomIndex = Math.floor(Math.random() * imageUrls.length);
      setBackgroundImage(imageUrls[randomIndex]);
    }
  }, [imageUrls]);

  return backgroundImage;
};

export default useBackgroundImage;
