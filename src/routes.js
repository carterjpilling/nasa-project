import { Route, Switch, Redirect } from 'react-router-dom'
import React from 'react'

import Homepage from './Components/Homepage'
import PhotoOfDay from './Components/PhotoOfDay'
import MarsWeather from './Components/MarsWeather'
import ImageLibrary from './Components/ImageLibrary/ImageLibrary'
import SearchResults from './Components/ImageLibrary/SearchResults'
import EventTracker from './Components/NaturalEvents/EventTrackers'

export default (
  <Switch>
    <Route exact path='/' component={Homepage} />
    <Route path='/apod' component={PhotoOfDay} />
    <Route path='/marsweather' component={MarsWeather} />
    <Route exact path='/imagelibrary' component={ImageLibrary} />
    <Route path='/imagelibrary/:search' component={SearchResults} />
    <Route path='/eventtracker' component={EventTracker} />
    <Route render={() => <Redirect to="/" />} />
  </Switch>
)