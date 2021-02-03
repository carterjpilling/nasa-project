/*
1. Map will load with 20 most recent events as points.
2. User can search by categories
2a. They can filter Active/InActive
2b. They can limit ? Need to see if putting pins on the map take Google Actions, if not then no limit.
2c. If there is no limit, then we will proceed with dates.
*/
const axios = require('axios')



module.exports = {
  getRecentEvents: async (req, res) => {
    console.log('Hit Recent')
    await axios.get(`https://eonet.sci.gsfc.nasa.gov/api/v3/events?limit=20`)
      .then((response) => {
        return res.status(200).send(response.data)
      })
      .catch((error) => res.send(error))
  },
  getEventByCategory: async (req, res) => {
    const { category } = req.params
    console.log(req.params)
    await axios.get(`https://eonet.sci.gsfc.nasa.gov/api/v3/categories/${category}?limit=20`)
      .then((response) => {
        return res.status(200).send(response.data)
      })
      .catch((error) => res.send(error))
  }
}