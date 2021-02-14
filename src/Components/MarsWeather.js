import React, { useState, useEffect } from 'react'
import axios from 'axios'


export default function MarsWeather() {
  const [marsInfo, setMarsInfo] = useState([])

  useEffect(() => {
    axios.get(`/api/nasa/mars`).then((res) => {
      setMarsInfo(res.data)
    })
  }, [])


  return (
    <div>
      <header>Pale Blue Dot</header>

    </div>
  )
}