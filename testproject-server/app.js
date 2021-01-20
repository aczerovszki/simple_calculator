const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const cors = require('cors');
const PORT = process.env.PORT || 5000;
fs = require('fs');

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.text())

// GET method route
app.get('/get', function (req, res) {
    fs.readFile('memory.txt', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        console.log("The number you sent to the client is: "+data);
        res.send(data)
      });
  })
// POST method route
app.post('/post', (req, res) => { 
fs.writeFile('memory.txt', req.body, function (err) {
    if (err) return console.log(err);
    console.log("The number "+req.body+" has been added to the file!")
  });
    res.send('Your number has been stored in memory.txt')
  })

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})