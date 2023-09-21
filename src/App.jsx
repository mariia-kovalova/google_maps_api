import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useJsApiLoader } from '@react-google-maps/api';

import { Map } from './components/Map';
import { MapLoader } from 'components/MapLoader';

import 'react-toastify/dist/ReactToastify.css';

const KEY = process.env.REACT_APP_GOOGLE_MAPS_API ?? '';
const libraries = ['places'];
const warning =
  'Google Maps API key is missing. The cart will not work correctly until you provide the key.';

export const App = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: KEY,
    libraries,
    language: 'en',
  });

  useEffect(() => {
    if (!KEY) toast.warning(warning);
  }, []);

  return (
    <>
      {isLoaded ? <Map /> : <MapLoader />}
      <ToastContainer />
    </>
  );
};
