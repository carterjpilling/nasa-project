import React, { useState, useEffect } from 'react'
import { AppBar, Toolbar, IconButton, List, SwipeableDrawer, ListItem, ListItemText, ListItemIcon } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import '../Styling/NavBar.css'
import NavList from './data/nav.json'
import HomeIcon from '@material-ui/icons/Home';
import PhotoIcon from '@material-ui/icons/Photo';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import BurstModeIcon from '@material-ui/icons/BurstMode';
import PublicIcon from '@material-ui/icons/Public';
import { Link } from 'react-router-dom'



const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});


export default function NavBar(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [])

  function iconFinder(icon) {

    const HOME = 'HomeIcon'
    const PHOTO = 'PhotoIcon'
    const WB = 'WbSunnyIcon'
    const BURST = 'BurstModeIcon'
    const PUBLIC = 'PublicIcon'

    switch (icon) {
      case HOME:
        return <HomeIcon />
      case PHOTO:
        return <PhotoIcon />
      case WB:
        return <WbSunnyIcon />
      case BURST:
        return <BurstModeIcon />
      case PUBLIC:
        return <PublicIcon />
      default:
        return null
    }
  }

  const drawer = NavList.map((e, i) => {
    return (
      <div key={i} className={classes.list}>
        <List>
          <ListItem
            className="Listitem"
            component={Link}
            to={e.link}
            onClick={() => setOpen(false)}>
            <ListItemIcon>{iconFinder(e.icon)}</ListItemIcon>
            <ListItemText primary={e.name} />
          </ListItem>
        </List>
      </div>
    )
  })


  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setOpen(!open)}>
          <MenuIcon onClick={() => setOpen(!open)} />
        </IconButton>
      </Toolbar>

      <SwipeableDrawer
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        {drawer}
      </SwipeableDrawer>
    </AppBar >
  )
}