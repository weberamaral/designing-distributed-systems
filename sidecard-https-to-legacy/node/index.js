const express = require('express')

const PORT = process.env.PORT || 8080

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World weber!')
})

app.listen(PORT)
console.log(`Running on port ${PORT}`)