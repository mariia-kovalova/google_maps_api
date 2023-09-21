import { useEffect, useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';

export const Location = ({
  setDestinationAddress,
  setDestinationLocation,
  destinationAddress,
  map,
}) => {
  const [autocomplete, setAutocomplete] = useState(null);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setInputValue(destinationAddress ?? '');

    return () => setAutocomplete(null);
  }, [destinationAddress]);

  const onInputChange = ({ target }) => {
    setInputValue(target.value.trim());
  };

  const onLoad = autocomplete => {
    setAutocomplete(autocomplete);
  };

  const onPlaceChanged = () => {
    const place = autocomplete && autocomplete.getPlace();

    if (!place) return;

    const address = place.formatted_address;

    if (!address) {
      setDestinationLocation(null);
      setDestinationAddress(place.name);
    }

    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();
    map && map.panTo({ lat, lng });
    setDestinationLocation({ lat, lng });
    setDestinationAddress(address);
  };

  return (
    <Autocomplete onPlaceChanged={onPlaceChanged} onLoad={onLoad}>
      <input
        className="field"
        id="autocompte-input"
        name="address"
        type="text"
        value={inputValue}
        onChange={onInputChange}
        placeholder="Enter the address"
      />
    </Autocomplete>
  );
};
