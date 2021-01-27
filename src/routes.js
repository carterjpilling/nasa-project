import { Route, Switch, Redirect } from 'react-router-dom'
import React from 'react'

import Homepage from './Components/Homepage'
import PhotoOfDay from './Components/PhotoOfDay'
import MarsWeather from './Components/MarsWeather'
import ImageLibrary from './Components/ImageLibrary/ImageLibrary'

export default (
  <Switch>
    <Route exact path='/' component={Homepage} />
    <Route path='/apod' component={PhotoOfDay} />
    <Route path='/marsweather' component={MarsWeather} />
    <Route path='/imagelibrary' component={ImageLibrary} />
    <Route render={() => <Redirect to="/" />} />
  </Switch>
)