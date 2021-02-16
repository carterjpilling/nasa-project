import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import '../Styling/EpicEarth.css'


export default function EpicEarth() {
  const [earthImages, setEarthImages] = useState([])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0);
    axios.get('/api/nasa/epic')
      .then((res) => {
        setEarthImages(res.data)
      })
  }, [])

  function slideLeft() {
    if (index === 0) {
      setIndex((earthImages.length - 1))
    } else {
      setIndex((index - 1))
    }
  }

  function slideRight() {
    if (index === (earthImages.length - 1)) {
      setIndex(0)
    } else {
      setIndex((index + 1))
    }
  }

  return (
    <div className="epic-container">
      <div className="image-container">
        <ArrowLeftIcon
          fontSize='large'
          className='icons'
          onClick={() => slideLeft()}
        />
        <img
          className="earth-image"
          src={earthImages[index]}
          alt="Earth" />
        <ArrowRightIcon
          fontSize='large'
          className='icons'
          onClick={() => slideRight()} />
      </div>
    </div>
  )
}