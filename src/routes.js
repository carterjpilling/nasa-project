import { Route, Switch, Redirect } from 'react-router-dom'
import React from 'react'

import Homepage from './Components/Homepage'
import PhotoOfDay from './Components/PhotoOfDay'
import MarsWeather from './Components/MarsWeather'
import ImageLibrary from './Components/ImageLibrary/ImageLibrary'
import SearchResults from './Components/ImageLibrary/SearchResults'
import EventTracker from './Components/NaturalEvents/EventTrackers'
import PaleBlueDot from './Components/PaleBlueDot'
import EpicEarth from './Components/Epic'
import Perserverance from './Components/Perserverance'

export default (
  <Switch>
    <Route exact path='/' component={Homepage} />
    <Route path='/apod' component={PhotoOfDay} />
    <Route path='/marsweather' component={MarsWeather} />
    <Route exact path='/imagelibrary' component={ImageLibrary} />
    <Route path='/imagelibrary/:search' component={SearchResults} />
    <Route path='/eventtracker' component={EventTracker} />
    <Route path='/palebluedot' component={PaleBlueDot} />
    <Route path='/epicearth' component={EpicEarth} />
    <Route path='/perserverance' component={Perserverance} />
    <Route render={() => <Redirect to="/" />} />
  </Switch>
)