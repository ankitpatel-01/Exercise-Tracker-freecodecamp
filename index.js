const express = require('express')
const db = require('./db/connection')
const cors = require('cors')
require('dotenv').config()
const bp = require('body-parser');
const app = express()

db();

app.use(express.json({
    extended: false
}))


app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});


app.use('/api/users',bp.urlencoded({ extended: false })
,require('./routes/users'));




const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
