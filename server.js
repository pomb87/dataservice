const app = require('./index')

const port = 3000
var cors = require('cors');
app.use(cors());

app.listen(port, (err) => {
    if (err) throw err
    console.log(`Example app listening at http://localhost:${port}`)
})