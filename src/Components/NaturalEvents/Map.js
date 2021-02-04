import React from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import ShowButton from './ShowButton'

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function MapComponent(props) {
  const { isLoaded } = useLoadScript({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)

    // map.
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
      mapTypeControl={false}
      scaleControl={false}
    >
      { /* Child components, such as markers, info windows, etc. */}
      <ShowButton />
      {props.events.map((e, i) => {
        return <Marker key={i}
          position={{ lat: e.geometry[0].coordinates[1], lng: e.geometry[0].coordinates[0] }}
          onClick={() => console.log(e.title)}




        />
      })}
    </GoogleMap>
  ) : <></>
}

export default React.memo(MapComponent)