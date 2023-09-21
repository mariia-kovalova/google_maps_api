import { useMemo, useState } from 'react';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';

export const Map = () => {
  const [infoWindowOpen, setInfoWindowOpen] = useState(false);

  const showInfoWindow = () => {
    setInfoWindowOpen(true);
  };

  const location = useMemo(
    () => ({
      lat: 46.48101658361459,
      lng: 30.714534081895014,
    }),
    []
  );

  const options = useMemo(
    () => ({
      mapId: '5328c82c88a1caff',
      zoom: 10,
      center: location,
    }),
    []
  );

  return (
    <GoogleMap mapContainerClassName="map-container" options={options}>
      <Marker
        position={location}
        title="Hello World!"
        icon="https://maps.google.com/mapfiles/kml/pal2/icon10.png"
        onClick={showInfoWindow}
      >
        {infoWindowOpen && (
          <InfoWindow onCloseClick={() => setInfoWindowOpen(false)}>
            <h1>Hi I am Info Window</h1>
          </InfoWindow>
        )}
      </Marker>
    </GoogleMap>
  );
};
