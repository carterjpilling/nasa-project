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

  function iconFinder(cat) {
    const DROUGHT = 'drought'
    const DUSTHAZE = 'dustHaze'
    const EARTHQUAKES = 'earthquakes'
    const FLOODS = 'Floods'
    const LANDSLIDES = 'landslides'
    const MANDMADE = 'manmade'
    const SEALAKEICE = 'seaLakeIce'
    const SEVERESTORMS = 'severeStorms'
    const SNOW = 'snow'
    const TEMPEXTREMES = 'tempExtremes'
    const VOLCANOES = 'volcanoes'
    const WATERCOLOR = 'waterColor'
    const WILDFIRES = 'wildfires'

    let icon

    switch (cat) {
      case DROUGHT:
        icon = '/assets/drought.svg'
        break
      case DUSTHAZE:
        icon = '/assets/dusthaze.png'
        break
      case EARTHQUAKES:
        icon = '/assets/earthquake.png'
        break
      case FLOODS:
        icon = '/assets/floods.png'
        break
      case LANDSLIDES:
        icon = '/assets/landslide.png'
        break
      case MANDMADE:
        icon = '/assets/manmade.png'
        break
      case SEALAKEICE:
        icon = '/assets/iceberg.svg'
        break
      case SEVERESTORMS:
        icon = '/assets/severeweather.png'
        break
      case SNOW:
        icon = '/assets/snow.png'
        break
      case TEMPEXTREMES:
        icon = '/assets/extremetemp.png'
        break
      case VOLCANOES:
        icon = '/assets/volcanoe.png'
        break
      case WATERCOLOR:
        icon = '/assets/watercolor.png'
        break
      case WILDFIRES:
        icon = '/assets/wildfire.svg'
        break
      default:
        console.log('Returned no icon')
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
          onClick={() => console.log(e.categories[0].id)}
          icon={{
            url: iconFinder(e.categories[0].id),
            scaledSize: new window.google.maps.Size(25, 25)
          }}

        />
      })}
    </GoogleMap>
  ) : <></>
}

export default React.memo(MapComponent)