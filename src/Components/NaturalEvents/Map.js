import React from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import ShowButton from './ShowButton'
import { GiIceberg } from 'react-icons/gi'

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

  function iconFinder(num) {
    let icon
    if (num === 2) {
      icon = '/assets/iceberg.svg'
    } else {
      return null
    }
    return icon
  }
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
      <ShowButton />
      {props.events.map((e, i) => {
        return <Marker key={i}
          position={{ lat: e.geometry[0].coordinates[1], lng: e.geometry[0].coordinates[0] }}
          onClick={() => console.log(e.title)}
          icon={{
            url: iconFinder(2),
            scaledSize: new window.google.maps.Size(25, 25)
          }}

        />
      })}
    </GoogleMap>
  ) : <></>
}

export default React.memo(MapComponent)