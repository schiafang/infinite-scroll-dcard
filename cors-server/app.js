const express = require('express')
const axios = require('axios')

const app = express()

app.get('/', async (req, res) => {
  const query = req.query
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000')

  let url

  if (query.before) {
    url = `https://www.dcard.tw/v2/posts?popular=true&before=${query.before}`
  } else {
    url = `https://www.dcard.tw/v2/posts?popular=true`
  }

  try {
    const response = await axios({
      method: 'GET',
      url: 'https://www.dcard.tw/v2/posts',
      params: req.query,
      mode: 'cors',
    })
    res.send(response.data)
  } catch (error) {
    console.error(error)
  }
})

app.listen(8080, () => {
  console.log('Cors Server Start 🎈')
})
