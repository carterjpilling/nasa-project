import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { TextField } from '@material-ui/core'

import '../../Styling/ImageLibrary.css'





function ImageLibrary(props) {

  const [search, setSearch] = useState('Space Ship')






  return (
    <div className='images-container'>
      <TextField
        id="standard-full-width"
        style={{ margin: 8 }}
        placeholder="Search here"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  )
}

export default ImageLibrary