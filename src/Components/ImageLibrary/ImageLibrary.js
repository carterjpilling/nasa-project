import React, { useEffect, useState } from 'react'
import { TextField, Card, CardActionArea, CardMedia, CardContent, Typography, makeStyles, Grid, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

import '../../Styling/ImageLibrary.css'

const array = [
  {
    title: "International Space Station",
    img: "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/iss064e027012.jpg",
    searchWord: "imagelibrary/International Space Station",
    description: "Have you wondered who is watching the world while you sleep? Consider the ISS our first defense."
  },
  {
    title: "Mars Curiosity",
    img: "https://www.nasa.gov/sites/default/files/thumbnails/image/curiosity_selfie.jpg",
    searchWord: "imagelibrary/mars curiosity",
    description: "Ever wanted to check out rocks on other planets? Well wish no longer my intergalactic sightseers."
  },
  {
    title: "Planets",
    img: "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/images/607694main_Kepler22bArtwork_full.jpg",
    searchWord: "imagelibrary/planets",
    description: `" These planets are out of this world! "`
  },
  {
    title: "Lasers",
    img: "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/calipso-2015-01-28.jpg",
    searchWord: "imagelibrary/lasers",
    description: "NASA has really cool lasers you guys."
  },
  {
    title: "Earth Missions",
    img: "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/iss064e016786.jpg",
    searchWord: "imagelibrary/Earth Missions",
    description: "Earth is in space right? Check out missions to this great planet!"
  },
  {
    title: "Presidents of the United States",
    img: "https://www.nasa.gov/sites/default/files/thumbnails/image/25-president_kennedy_tours_hangar_s.jpg",
    searchWord: "imagelibrary/President of the United States",
    description: "Did you know the office of POTUS sets and requests NASA's agend and budget?"
  },
  {
    title: "Apollo 11",
    img: "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/apollo_11_launch_-_gpn-2000-000630_1.jpg",
    searchWord: "imagelibrary/Apollo",
    description: "The first spaceflight that landed humans on the moon on July 20, 1969."
  },
  {
    title: "Space Shuttle Discovery",
    img: "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/images/247733main_full_full.jpg",
    searchWord: "imagelibrary/Space Shuttle Discovery",
    description: "With over 27 years of service, the Discovery has the most spaceflights of any ship to date."
  },
  {
    title: "Space X Dragon",
    img: "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/iss048e041836.jpg",
    searchWord: "imagelibrary/Space X Dragon",
    description: "Space X Dragon shows that private transportation can work. Now selling tickets to the Moon!"
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
  },
  search: {
    width: 315
  }
});



function ImageLibrary() {
  const history = useHistory()
  const classes = useStyles();
  const [search, setSearch] = useState(null)


  useEffect(() => {
    setSearch(null)
  }, [])

  function imageSearch() {
    history.push(`/imagelibrary/${search}`)
  }

  function keyDown(e) {
    if (e.keyCode === 13) {
      return imageSearch()
    } else {
      return null
    }
  }


  const mappedData = array.map((e, i) => {
    return (
      <CardActionArea key={i} className={classes.root} component={Link}
        to={e.searchWord}
      >
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={e.img}
            title={e.title}
          />
          <CardContent >
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
      <Card className="search-card" >
        <Typography align='center'>
          Search NASA's image library or click a popular subject below.
        </Typography>
        <CardContent className="search-cardcontent">
          <TextField
            onKeyDown={(e) => keyDown(e)}
            id="standard-full-width"
            style={{ margin: 8 }}
            placeholder="Search for... (e.g. 'Artemis')"
            margin="normal"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button
            className='search-button'
            variant="contained"
            color="primary"
            onClick={() => imageSearch()}
          >
            Search
            </Button>
        </CardContent>
      </Card>
      <Grid
        className={classes.gridcontainer}
        container spacing={0}
        direction="row"
        justify="center"
        alignItems="center"
      >
        {mappedData}
      </Grid>
    </div >
  )
}

export default ImageLibrary