import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import '../Styling/EpicEarth.css'
import { Button } from '@material-ui/core';


export default function EpicEarth() {
  const [earthImages, setEarthImages] = useState([])
  const [index, setIndex] = useState(0)
  const [slideState, setSlideState] = useState(false)

  useEffect(() => {
    setSlideState(false)
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

  function triggerSlide() {
    console.log('hit', slideState)
    setSlideState(!slideState)
    sliderShow()
  }

  function sliderShow() {
    if (slideState) {
      setInterval(function () { slideRight(); }, 1000);
    }
  }

  function slideRight() {
    if (slideState) {
      console.log(index)
      if (index === (earthImages.length - 1)) {
        setIndex(0)
      } else {
        setIndex((index + 1))
      }
    } else {
      return null
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
        <Button className={slideState ? 'true-button' : 'false-button'} onClick={() => triggerSlide()}>Slideshow</Button>
        <img
          onLoad={() => console.log('loaded')}
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