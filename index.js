const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('GeekyDev_')
})

app.get('/night', (req, res) => {
    res.send(' <h1> Hey Batman It\'s Night. Let\'s Save the Gotham.</h1>')
}
)

app.get('/day', (req, res) => {
    res.send(' <h1> Hey Batman It\'s Day. Let\'s sleep we\'ve to save the city during night.</h1>')
}
)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})