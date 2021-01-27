import React from 'react'
import { makeStyles, Card, CardActionArea, CardContent, Typography, CardMedia, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import cardData from './data/data.json'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
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

  const cardArray = cardData.map((e, i) => {
    return (
      <Grid index={i} container spacing={4} justify="center" >
        <Card className={classes.root}>
          <Link to={e.link}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={e.image}
                title={e.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {e.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {e.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
      </Grid>
    )
  })

  return (
    <div>
      <Grid className={classes.gridcontainer} container spacing={4} justify="center" >
        {cardArray}
      </Grid>
    </div>
  )
}