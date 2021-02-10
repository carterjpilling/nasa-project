import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../../Styling/EventTracker.css'
import MapComponent from './Map'

export default function EventTracker() {
  const [events, setEvents] = useState([])
  const [listOpen, setListOpen] = useState(false)


  useEffect(() => {
    axios.get('/api/events').then((res) => {
      setEvents(res.data.events)
    })
  }, [])

  return (
    <div className="event-div">

      <MapComponent
        listOpen={listOpen}
        setListOpen={setListOpen}
        events={events}
      />
    </div>
  )
}