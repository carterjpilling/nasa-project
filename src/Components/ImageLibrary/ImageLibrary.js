import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { GridList, GridListTile, GridListTileBar, IconButton, makeStyles, withWidth, isWidthUp } from '@material-ui/core'
import InfoIcon from '@material-ui/icons/Info'
import '../../Styling/ImageLibrary.css'
import ImageModal from './ImageModal'


const useStyles = makeStyles(() => ({
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}))

function ImageLibrary(props) {
  const classes = useStyles();
  const [images, setImages] = useState([])
  const [search, setSearch] = useState('Space Ship')
  const [preview, setPreview] = useState(false)
  const [previewIndex, setPreviewIndex] = useState(null)

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

  useEffect(() => {
    axios.get(`api/nasa/images/${search}`)
      .then((res) => {
        setImages(res.data)
      })

    setPreview(false)
  }, [])



  async function viewImage(i) {
    await setPreviewIndex(i)
    setPreview(true)
  }
  return (
    <div className='images-container'>
      {(previewIndex || previewIndex === 0) &&
        <ImageModal
          preview={preview}
          setPreview={setPreview}
          previewIndex={previewIndex}
          images={images}

        />
      }
      <GridList cols={getGridListCols()}>
        {images.map((e, i) => (
          <GridListTile
            key={i}>
            < img key={i} src={e.links[0].href} alt={e.data[0].description} />

            <GridListTileBar
              title={e.data[0].description}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon onClick={() => viewImage(i)} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}

export default withWidth()(ImageLibrary)