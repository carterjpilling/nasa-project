import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { TextField, Card, CardActionArea, CardMedia, CardContent, Typography, makeStyles, Grid } from '@material-ui/core'

import '../../Styling/ImageLibrary.css'

const array = [
  {
    title: "Planets",
    img: "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/images/607694main_Kepler22bArtwork_full.jpg",
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
    img: "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/iss064e016786.jpg",
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

const useStyles = makeStyles({
  root: {
    width: 315,
    height: 300,
    margin: 15,
  },
  card: {
    width: 315,
    height: 300,
  },
  media: {
    height: 140,
  },
  gridcontainer: {
    flexGrow: 1,
  }
});



function ImageLibrary(props) {
  const classes = useStyles();

  const [search, setSearch] = useState('Space Ship')


  const mappedData = array.map((e, i) => {
    return (
      <CardActionArea key={i} className={classes.root}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={e.img}
            title={e.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {e.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {e.description}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    )
  })



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
      <Grid
        className={classes.gridcontainer}
        container spacing={0}
        direction="row"
        justify="center"
        alignItems="center"
      // item xs={12} sm={6} md={3}

      >
        {mappedData}
      </Grid>
    </div>
  )
}

export default ImageLibrary