import express from 'express'
const app = express()

app.set('view engine','ejs')

app.get('/',(req, res) => {

    res.send('Home Page')

})

app.get('/about',(req, res) => {

    let items = ['Apple','Orange','Banana'];

    var users = [

        {name:'Ankit',age:21,city:'AMD'},
        {name:'Ankit2',age:21,city:'AMD'},
        {name:'Ankit3',age:21,city:'AMD'},
        {name:'Ankit4',age:21,city:'AMD'}

    ]

    res.render('about', {
        title:'About Page', 
        message:'Welcome to EJS!',
        items,
        users
    })

}) 

app.get('/contact',(req, res) => {

    res.send('Contact Page')

})  

app.listen(3000, () => {
    console.log("Server Started Successfully.")
}) 