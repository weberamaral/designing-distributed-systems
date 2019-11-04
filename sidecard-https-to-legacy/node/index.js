const express = require('express')

const NODE_PORT = process.env.NODE_APP_PORT || 8080
const NODE_HOST = process.env.NODE_APP_HOST || '0.0.0.0'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(NODE_PORT, NODE_HOST)
console.log(`Running on http://${NODE_HOST}:${NODE_PORT}`)