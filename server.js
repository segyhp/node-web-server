const express = require('express');
const hbs = require('hbs');

let app = express();

app.set('view engine', 'hbs');
app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
    // res.send('<h1>Hello Express!</h1>');
    // res.send(
    //     {
    //         'name': 'Segy',
    //         'age': 25,
    //         'isMarried': false,
    //         games: ['dota 2', 'the witcher 3']
    //     }
    // );
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome to the page',
        currentYear: new Date().getFullYear()
    })
});

app.get('/about', (req, res) => {
    // res.send('<h2>About Page </h2>')
    res.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });
});

app.get('/bad', (req, res) => {
   res.send({
       status: 404,
       message: 'Content not Found!'
   })
});

app.listen(3000, () =>{
    console.log("Server up to port 3000");
});