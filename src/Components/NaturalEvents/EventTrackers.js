import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../../Styling/EventTracker.css'
import { Card, Typography, } from '@material-ui/core'
import sources from '../data/sources.json'
import MapComponent from './Map'

//https://eonet.sci.gsfc.nasa.gov/api/v3/categories 
export default function EventTracker() {
  const [events, setEvents] = useState([])



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

  useEffect(() => {
    axios.get('/api/events').then((res) => {
      setEvents(res.data.events)
    })
  }, [])

  const array = events.map((e, i) => {
    return (

      <Card key={i} className='event-card'>
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
      </Card>

    )
  })



  return (
    <div className="event-div">

      <MapComponent
        array={array}
        events={events}
      />
    </div>
  )
}