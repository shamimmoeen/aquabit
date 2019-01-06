const express = require('express')
const app = express()
var port = process.env.PORT || 5000

app.use(express.static(__dirname + "/public"))

app.get('/', (req, res) => {
    res.sendFile(index.html)
})

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})