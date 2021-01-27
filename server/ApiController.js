const axios = require('axios')
const { NASA_KEY } = process.env

module.exports = {

  photo: async (req, res) => {
    await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`)
      .then((response) => {
        return res.status(200).send(response.data)
      })
      .catch((err) => res.send(err))
  },
  mars: async (req, res) => {
    await axios.get(`https://api.nasa.gov/insight_weather/?api_key=${NASA_KEY}&feedtype=json&ver=1.0`)
      .then((response) => {
        return res.status(200).send(response.data)
      })
      .catch((err) => res.send(err))
  },
  images: async (req, res) => {
    const { searchitem } = req.params

    await axios.get(`https://images-api.nasa.gov/search?q=${searchitem}&media_type=image`)
      .then((response) => {
        return res.status(200).send(response.data)
      })
      .catch((err) => res.send(err))
  }

}