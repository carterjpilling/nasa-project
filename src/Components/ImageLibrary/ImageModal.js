import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Fade, Typography, CardMedia, Card } from '@material-ui/core';
import '../../Styling/ImageLibrary.css'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  media: {
    height: 500,
  },
}));

export default function ImageModal(props) {


  const { preview, setPreview, previewIndex, images } = props
  const classes = useStyles();

  function handleClose() {
    setPreview(false)
  }

  return (
    <div className="modal-div">
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal-container"
        open={preview}
        onClose={handleClose}
        // closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={preview}>
          <div className={classes.paper}>
            <div
              className="modal-img-container"

            >
              <img
                className="modal-img"
                alt={images[previewIndex].data[0].title}
                src={images[previewIndex].links[0].href}

              />
              <body className="modal-description">
                <Typography
                  align='center'
                >
                  {images[previewIndex].data[0].title}

                </Typography>
                <Typography >
                  {images[previewIndex].data[0].description}
                </Typography>
              </body>
            </div>
          </div>
        </Fade>
      </Modal>
    </div >
  );
}
