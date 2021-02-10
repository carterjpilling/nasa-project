import React, { useState, useCallback, useRef } from 'react'
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { Card, CardActionArea, Typography } from '@material-ui/core'
import ShowButton from './ShowButton'
import sources from '../data/sources.json'

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: -10,
  lng: -0
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
  maxZoom: 10,
  minZoom: 2,
  restriction: {
    latLngBounds: { north: 85, south: -85, west: -180, east: 180 },
  },
}

function sourceFinder(source) {
  let sourceName
  // eslint-disable-next-line array-callback-return
  sources.find((e) => {
    if (e.id === source) {
      sourceName = e.title
    }
  })
  return sourceName
}

function MapComponent(props) {
  const { listOpen, setListOpen } = props
  const [selected, setSelected] = useState(null)

  const { isLoaded } = useLoadScript({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])


  function panTo(lat, lng) {
    setSelected(null)
    let panPoint = new window.google.maps.LatLng(lat, lng)
    map.setZoom(9)
    map.panTo(panPoint)
    setListOpen(false)
  }

  function zoomOut() {
    setSelected(null)
    let panPoint = new window.google.maps.LatLng(-10, 0)
    map.setZoom(2)
    map.panTo(panPoint)
  }


  const array = props.events.map((e, i) => {
    return (

      <Card key={i} className='event-card'>
        <CardActionArea className='event-card-action-area'
          onClick={() => panTo(e.geometry[0].coordinates[1], e.geometry[0].coordinates[0])}
        >
          <Typography
            align='center'
            variant='h6'
            // noWrap={true}
            gutterBottom={true}
            className='event-title'>
            {e.title}
          </Typography>
          <Typography>
            <b>Date:</b> {e.geometry[0].date.slice(0, 10)}
          </Typography>
          <Typography>
            <b>Event Category:</b> {e.categories[0].title}
          </Typography>
          <Typography>
            <b>Source:</b> {sourceFinder(e.sources[0].id)}
          </Typography>
        </CardActionArea>
      </Card>

    )
  })


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
        console.log('No icon')
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
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={options}
      mapTypeControl={false}
      scaleControl={false}
    >
      <ShowButton
        listOpen={listOpen}
        setListOpen={setListOpen}
        array={array}
        zoomOut={() => zoomOut()}
      />
      {props.events.map((e, i) => {
        return <Marker key={i}
          position={{ lat: e.geometry[0].coordinates[1], lng: e.geometry[0].coordinates[0] }}
          onClick={() => setSelected(i)}
          icon={{
            url: iconFinder(e.categories[0].id),
            scaledSize: new window.google.maps.Size(25, 25)
          }}

        >
          {(selected === i) &&
            <InfoWindow
              position={{
                lat: (e.geometry[0].coordinates[1] + .01),
                lng: e.geometry[0].coordinates[0]
              }}
              onCloseClick={() => setSelected(null)}
              className="info-bubble"
            >
              <Typography >{e.title}</Typography>
            </InfoWindow>
          }
        </Marker>
      })}


    </GoogleMap>
  ) : <></>
}

export default React.memo(MapComponent)