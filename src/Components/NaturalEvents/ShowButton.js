import React, { useState } from 'react'
import clsx from 'clsx';
import { IconButton, makeStyles, useTheme, Drawer, Divider, Typography, Button } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import '../../Styling/EventTracker.css'

const drawerWidth = 235;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',

  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,


  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'space-between',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));


//80.1vh, 8.3vhh margin-top

export default function ShowButton(props) {

  const { array, listOpen, setListOpen } = props
  const classes = useStyles();
  const theme = useTheme();



  function handleDrawerToggle() {
    setListOpen(!listOpen)
  }

  return (
    <div className={classes.root}>
      <Button
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerToggle}
        className={`${clsx(listOpen && classes.hide)} ${'icon-button'}`}
      >
        SHOW EVENTS
      </Button>
      <Button
        onClick={() => props.zoomOut()}
        color="inherit"
        className="reset-button">
        Zoom Out
      </Button>
      <nav className={`${classes.drawer} `} aria-label="mailbox folders">
        <Drawer
          className={`${classes.drawer} `}
          variant="persistent"
          anchor="left"
          open={listOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <Typography>Current Events</Typography>
            <IconButton onClick={handleDrawerToggle}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <div className='first-array-container'>
            < div className='array-container'>
              {array}
            </div >
          </div >
        </Drawer>
      </nav>
    </div>
  )
}