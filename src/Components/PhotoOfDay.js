import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Typography } from '@material-ui/core'
import '../Styling/PhotoOfDay.css'


export default function PhotoOfDay() {
  const [photoInfo, setPhotoInfo] = useState([])

  useEffect(() => {
    axios.get(`/api/nasa/photo`).then((res) => {
      setPhotoInfo(res.data)
    })
  }, [])


  return (
    <div className="apod-parent">
      <div>
        <Typography variant="h4" align="center">
          Astronomy Photo Of The Day
        </Typography>
      </div>
      <br />
      <div>
        <Typography variant="h6">
          Uncover the cosmos daily through photos from professional astronomers. For daily content visit <a className="apod-link" href="https://apod.nasa.gov/apod/archivepix.html">NASA's archive.</a>
        </Typography>
      </div>
      <br />
      <div>
        <Typography variant="h6">
          <b>{photoInfo.date}</b>
        </Typography>
      </div>
      {photoInfo.media_type === "video" ?
        <iframe
          src={photoInfo.url}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={photoInfo.title}
        /> :
        <>
          {photoInfo.hdurl ?
            <a href={photoInfo.hdurl}>
              <img
                className="apod-img"
                alt={photoInfo.title}
                src={photoInfo.hdurl}
              />
            </a> :
            <a href={photoInfo.url}>
              <img
                className="apod-img"
                alt={photoInfo.title}
                src={photoInfo.url}
              />
            </a>}
        </>}

      <div>
        <br />
        <Typography variant="h5" align="center">
          <b>{photoInfo.title}</b>
        </Typography>
      </div>
      <br />
      <div>
        <Typography variant="body2" paragraph="true">
          <b>Explanation:</b> {photoInfo.explanation}
        </Typography>
      </div>
    </div>
  )
}

//https://apod.nasa.gov/apod/archivepix.html
/*
  date:
  explanation:
  hdurl:
  media_type:
  service_version:
  title:
  url:



*/