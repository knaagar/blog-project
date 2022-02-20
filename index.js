const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('public'))

app.get('/', (req, res) => { 
    res.sendFile(process.cwd() + '/public/views/index.html')
});

const data = require(process.cwd() + '/public/resources/posts.json')

app.get('/api', function (req, res) {
    res.json(data)
})

app.get('/*', function (req, res) {
    res.sendFile(process.cwd() + '/public/views/show.html')
})

const port = process.env.PORT || 3000

app.listen(port, () => { 
    console.log(`Listening on port ${port}`)
})
