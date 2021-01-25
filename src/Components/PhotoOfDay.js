import React, { useState, useEffect } from 'react'
import axios from 'axios'


export default function PhotoOfDay() {
  const [photoInfo, setPhotoInfo] = useState([])

  useEffect(() => {
    axios.get(`/api/photo`).then((res) => {
      setPhotoInfo(res.data)
    })
  }, [])


  return (
    <div>
      Photo of the Day.
    </div>
  )
}