import React from 'react'
import PhotoOfDay from './PhotoOfDay'
import MarsWeather from './MarsWeather'
import ImageLibrary from './ImageLibrary'

export default function Homepage() {

  return (
    <div>
      Homepage
      <PhotoOfDay />
      <MarsWeather />
      <ImageLibrary />
    </div>
  )
}