import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { GridList, GridListTile, GridListTileBar, IconButton, makeStyles, withWidth, isWidthUp, Card, Typography, CardContent, TextField, Button } from '@material-ui/core'
import InfoIcon from '@material-ui/icons/Info'
import '../../Styling/ImageLibrary.css'
import { useHistory } from 'react-router-dom'
import ImageModal from './ImageModal'


const useStyles = makeStyles(() => ({
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}))


function SearchResults(props) {
  const history = useHistory()
  const classes = useStyles();
  const [images, setImages] = useState([])
  const [search, setSearch] = useState(null)
  const [open, setOpen] = useState(false)
  const [imgIndex, setImgIndex] = useState()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    axios.get(`api/nasa/images/${props.match.params.search}`)
      .then((res) => {
        setImages(res.data)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (imgIndex === undefined) {
      console.log(null)
      return null
    } else {
      console.log(imgIndex)
      setOpen(true)
    }
  }, [imgIndex])

  const getGridListCols = () => {
    if (isWidthUp('xl', props.width)) {
      return 4;
    }

    if (isWidthUp('lg', props.width)) {
      return 3;
    }

    if (isWidthUp('md', props.width)) {
      return 2;
    }

    return 1;
  }

  async function imageSearch() {
    await history.push(`/imagelibrary/${search}`)
    history.go()

  }

  function keyDown(e) {
    if (e.keyCode === 13) {
      return imageSearch()
    } else {
      return null
    }
  }

  return (
    <div className='searchresults-container'>
      {open &&
        <ImageModal
          open={open}
          setOpen={setOpen}
          imgIndex={imgIndex}
          images={images}

        />
      }
      <Card className="search-card">
        <Typography align='center'>
          Showing results for '{props.match.params.search}'
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



      <GridList cols={getGridListCols()}>
        {images.map((e, i) => (
          <GridListTile
            key={i}>
            < img key={i} src={e.links[0].href} alt={e.data[0].description} />

            <GridListTileBar
              title={e.data[0].description}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon
                    onClick={() => setImgIndex(i)}
                  />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}

export default withRouter(withWidth()(SearchResults))