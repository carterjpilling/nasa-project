import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { GridList, GridListTile, GridListTileBar, IconButton, makeStyles, withWidth, isWidthUp } from '@material-ui/core'
import InfoIcon from '@material-ui/icons/Info'
import '../../Styling/ImageLibrary.css'

const useStyles = makeStyles(() => ({
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}))


function SearchResults(props) {
  const classes = useStyles();
  const [images, setImages] = useState([])

  useEffect(() => {
    axios.get(`api/nasa/images/${props.match.params.search}`)
      .then((res) => {
        setImages(res.data)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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

  return (
    <div className='searchresults-container'>
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
                  // onClick={() => viewImage(i)} 
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