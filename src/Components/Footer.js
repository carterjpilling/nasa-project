import React from 'react'
import { AppBar, Toolbar, IconButton } from '@material-ui/core'
import '../Styling/Footer.css'

export default function NavBar() {

  return (
    <AppBar position="static" className="footer">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}