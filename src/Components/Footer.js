import React from 'react'
import { AppBar, Toolbar, IconButton } from '@material-ui/core'

export default function NavBar() {

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}