const express = require('express')
const app = express()

app.get('/', (req, res) => {

    const users = [

        {id:1,name:"Ankit"},
        {id:3,name:"Ankit"}

    ]

    res.json(users);

});

app.set('view engine','ejs')

app.get('/about', (req, res) => {

    res.redirect('..'); 

});

app.get('/user', (req, res) => {

    res.render('user')
});

app.get('/download', (req, res) => {

    res.download('./Files/HTML5_Logo.svg', 'HTML.svg')
});

app.listen(3000, () => {

    console.log("Successfully Connected on port 3000.")

})