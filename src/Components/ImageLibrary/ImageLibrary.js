import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { TextField } from '@material-ui/core'

import '../../Styling/ImageLibrary.css'

const data = [
  {
    title: "Planets",
    img: "",
    searchWord: "planets",
    description: "'These planets are out of this world!'"
  },
  {
    title: "Lasers",
    img: "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/calipso-2015-01-28.jpg",
    searchWord: "lasers",
    description: "NASA has really cool lasers you guys."
  },
  {
    title: "Mars Curiosity",
    img: "https://www.nasa.gov/sites/default/files/thumbnails/image/curiosity_selfie.jpg",
    searchWord: "mars curiosity",
    description: "Ever wanted to check out rocks on other planets? Well wish no longer my intergalactic voyagers."
  },
  {
    title: "Earth Missions",
    img: "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/iss064e027012.jpg",
    searchWord: "Earth Missions",
    description: "Earth is in space right? Check out missions to this great planet!"
  },
  {
    title: "International Space Station",
    img: "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/iss064e027012.jpg",
    searchWord: "International Space Station",
    description: "Ever wonder who is watching the world while you sleep? Consider the ISS our first defense."
  },
  {
    title: "Presidents of the United States",
    img: "https://www.nasa.gov/sites/default/files/thumbnails/image/25-president_kennedy_tours_hangar_s.jpg",
    searchWord: "International Space Station",
    description: "Did you know the office of POTUS set and request NASA's agend and budget?"
  },
]



function ImageLibrary(props) {

  const [search, setSearch] = useState('Space Ship')






  return (
    <div className='images-container'>
      <TextField
        id="standard-full-width"
        style={{ margin: 8 }}
        placeholder="Search here"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  )
}

export default ImageLibrary