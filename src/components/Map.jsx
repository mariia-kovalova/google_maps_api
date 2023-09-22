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
    [location]
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

// ===================== Masha's part ============================================

// const ODESA = {
//   lat: 46.48101658361459,
//   lng: 30.714534081895014,
// };

// export const Map = () => {
//   const [location, setLocation] = useState(null);
//   const [destination, setDestination] = useState(null);

//   const options = useMemo(
//     () => ({
//       mapId: '5328c82c88a1caff',
//       zoom: 10,
//       center: location || ODESA,
//     }),
//     [location]
//   );

//   useEffect(() => {
//     window.navigator.geolocation.getCurrentPosition(({ coords }) => {
//       setLocation({
//         lat: coords.latitude,
//         lng: coords.longitude,
//       });
//     });
//   }, []);

//   const onMapClick = ({ latLng }) => {
//     if (!latLng) return;

//     const destinationLatLang = {
//       lat: latLng.lat(),
//       lng: latLng.lng(),
//     };

//     setDestination(destinationLatLang);
//   };

//   return (
//     <GoogleMap
//       mapContainerClassName="map-container"
//       options={options}
//       onClick={onMapClick}
//     >
//       <Marker
//         position={location}
//         title="I am here"
//         icon="https://maps.google.com/mapfiles/kml/pal2/icon10.png"
//       />

//       {destination ? (
//         <Marker position={destination} title="I want to go here" />
//       ) : null}
//     </GoogleMap>
//   );
// };

// ================= need enable biling to show the result ==================

// export const Map = () => {
//   const [map, setMap] = useState(null);
//   const [userLocation, setUserLocation] = useState(null);
//   const [destinationLocation, setDestinationLocation] = useState(null);
//   const [destinationAddress, setDestinationAddress] = useState(null);
//   const [directionsResponse, setDirectionsResponse] = useState(null);

//   const options = useMemo(
//     () => ({
//       mapId: '5328c82c88a1caff',
//       zoom: 10,
//       center: userLocation || ODESSA,
//     }),
//     [userLocation]
//   );

//   const geocoder = useMemo(() => new window.google.maps.Geocoder(), []);

//   useEffect(() => {
//     window.navigator.geolocation.getCurrentPosition(({ coords }) => {
//       setUserLocation({
//         lat: coords.latitude,
//         lng: coords.longitude,
//       });
//     });
//   }, []);

//   useEffect(() => {
//     const calculateRoute = async () => {
//       if (!userLocation || !destinationLocation) return;

//       const directionsService = new window.google.maps.DirectionsService();

//       const results = await directionsService.route({
//         userLocation,
//         destinationLocation,
//         travelMode: window.google.maps.TravelMode.DRIVING,
//       });

//       setDirectionsResponse(results);
//     };

//     calculateRoute();
//   }, [destinationLocation, userLocation]);

//   const onMapClick = ({ latLng }) => {
//     if (!latLng) return;

//     const destinationLatLang = {
//       lat: latLng.lat(),
//       lng: latLng.lng(),
//     };

//     setDestinationLocation(destinationLatLang);

//     geocoder.geocode({ latLng }, (results, status) => {
//       if (status === 'OK' && results.length > 0) {
//         const address = results[0].formatted_address || results[0].name;
//         setDestinationAddress(address);
//       }
//     });
//   };

//   return (
//     <div className="wrap">
//       <GoogleMap
//         mapContainerClassName="map-container"
//         options={options}
//         onClick={onMapClick}
//         onLoad={map => setMap(map)}
//       >
//         <Marker
//           position={userLocation}
//           title="I am here"
//           icon="https://maps.google.com/mapfiles/kml/pal2/icon10.png"
//         />

//         {destinationLocation ? (
//           <Marker position={destinationLocation} title="I want to go here" />
//         ) : null}

//         {directionsResponse ? (
//           <DirectionsRenderer directions={directionsResponse} />
//         ) : null}
//       </GoogleMap>

//       <Location
//         setDestinationAddress={setDestinationAddress}
//         setDestinationLocation={setDestinationLocation}
//         destinationAddress={destinationAddress}
//         map={map}
//       />
//     </div>
//   );
// };
