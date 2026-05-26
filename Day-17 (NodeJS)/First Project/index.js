const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h2> Hello World! </h2>');
});

app.get('/about/:userid-:bookid', (req, res) => {
  res.send("Book ID: " + req.params.bookid);
});

app.get('/search', (req, res) => {

    const name = req.query.name
    const age = req.query.age

  res.send(`<h2> Name: ${name}, Age: ${age}</h2>`);
});

app.listen(3000,() => {

    console.log("Successfully Connected on port 3000.")

})