const express = require('express')
const app = express()
const port = 3000

const CSVToJSON = require('csvtojson');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/vaccinationinfo', (req, res) => {
    var response;
    CSVToJSON().fromFile('data/timeline-bundeslaendermeldungen.csv')
    .then(users => {
        // users is a JSON array
        // log the JSON array
        //https://attacomsian.com/blog/nodejs-convert-csv-to-json
        console.log(users);
        response = JSON.stringify(users);
    }).catch(err => {
        // log error if any
        console.log(err);
    });
    res.send(users)
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

