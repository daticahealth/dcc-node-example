const express = require('express')
const app = express()
const port = 8081

const message = process.env.MESSAGE

app.get('/', (req, res) => {
  res.send(!!message
    ? `Success!  Message: ${message}`
    : `Failed!  MESSAGE is undefined - verify the env variable`
  )
})

app.get('/_healthcheck', (req, res) => {
  res.send('healthy')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})