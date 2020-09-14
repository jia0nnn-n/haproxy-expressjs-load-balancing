
const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send(`<h1>listening at port ${port}</h1>`)
})

app.listen(port, () => {
  console.log(`listening at port ${port}`)
})
