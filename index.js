const express = require('express')

const app = express()
const port = 8000

app.get('/', function (req, res) {
    res.send({ server: 'Ok' })
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})