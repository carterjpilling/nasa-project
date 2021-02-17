import React from 'react'
import '../Styling/Perserverance.css'
import { Typography } from '@material-ui/core'

export default function Perserverance() {

  return (
    <div className="perserverance-container">
      <Typography
        className="title"
        variant='h4'
      >The Perserverance Mission</Typography>
      <Typography
        variant='subtitle1'
        className="body"
      >
        <a
          style={{ "text-decoration": "none" }}
          href="https://www.nasa.gov/feature/jpl/nasa-s-next-mars-rover-is-ready-for-the-most-precise-landing-yet"
          target="_blank"
          rel="noopener noreferrer"
        >Acccording to NASA</a>,
      "A key objective of Perseverance’s mission on Mars is astrobiology, including the search for signs of ancient microbial life. The rover will characterize the planet’s geology and past climate, pave the way for human exploration of the Red Planet, and will be the first mission to collect and cache Martian rock and sediment for later return to Earth."</Typography>
      <img
        className="picture"
        src="https://d2pn8kiwq2w21t.cloudfront.net/images/jpegPIA23962.width-1440.jpg"
        alt="The Peserverance"
      />

      <Typography>NASA is using the Ingenuity Mars Helicopter to deliver the Perserverance. It is the first aircraft that humanity has sent to another planet to <a
        style={{ "text-decoration": "none" }}
        href="https://www.jpl.nasa.gov/news/press_kits/ingenuity/landing/"
        target="_blank"
        rel="noopener noreferrer">"attempt powered, controlled flight."</a></Typography>
      <iframe width="560"
        height="315"
        src="https://www.youtube.com/embed/M4tdMR5HLtg"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
        title="NASA's Perseverance Rover Attempts Most Dangerous Landing Yet"
      >
      </iframe>
    </div>
  )
}