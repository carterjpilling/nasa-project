import React, { useEffect } from 'react'
import { makeStyles, Card, CardActionArea, CardContent, Typography, CardMedia, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import cardData from './data/data.json'
import '../Styling/Homepage.css'

const useStyles = makeStyles({
  root: {
    width: 315,
    height: 315,
    margin: 15,
  },
  card: {
    width: 315,
    height: 315,
  },
  media: {
    height: 140,
  },
  gridcontainer: {
    flexGrow: 1,
  }
});

export default function Homepage() {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const cardArray = cardData.map((e, i) => {
    return (
      <CardActionArea
        className={classes.root} index={i}
        component={Link}
        to={e.link}

      >
        <Card className={classes.card}>

          <CardMedia
            className={classes.media}
            image={e.image}
            title={e.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {e.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className="description-body">
              {e.description}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    )
  })

  return (
    <div className="homepage-container">
      <Grid

        className={classes.gridcontainer}
        container spacing={0}
        direction="row"
        justify="center"
        alignItems="center"

      >
        {cardArray}
      </Grid>
    </div>
  )
}