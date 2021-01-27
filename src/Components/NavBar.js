import React, { useState } from 'react'
import { AppBar, Toolbar, IconButton, Popper, Grow, ClickAwayListener, MenuList, MenuItem, Paper } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import '../Styling/NavBar.css'
import { Link } from 'react-router-dom'

export default function NavBar() {
  const anchorRef = React.useRef(null);
  const [open, setOpen] = useState(false)

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setOpen(!open)}>
          <MenuIcon onClick={() => setOpen(!open)} />
        </IconButton>
      </Toolbar>
      <Popper className="navbar-popper" open={open} role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}>
            <Paper>
              <ClickAwayListener onClickAway={() => handleClose()}>
                <MenuList
                  className="navbar-links"
                  autoFocusItem={open}
                  onKeyDown={handleListKeyDown}>
                  <MenuItem
                    onClick={() => setOpen(false)}
                    component={Link}
                    to='/'
                  >
                    Homepage
                  </MenuItem>
                  <MenuItem
                    onClick={() => setOpen(false)}
                    component={Link}
                    to='/apod'
                  >
                    Photo of the Day
                    </MenuItem>
                  <MenuItem
                    onClick={() => setOpen(false)}
                    component={Link}
                    to='/marsweather'
                  >
                    Mars Weather
                    </MenuItem>
                  <MenuItem
                    onClick={() => setOpen(false)}
                    component={Link}
                    to='/imagelibrary'
                  >
                    Image Library
                    </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </AppBar >
  )
}