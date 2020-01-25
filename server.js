const express = require('express');

let app = express();

app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
    // res.send('<h1>Hello Express!</h1>');
    res.send(
        {
            'name': 'Segy',
            'age': 25,
            'isMarried': false,
            games: ['dota 2', 'the witcher 3']
        }
    );
});

app.get('/about', (req, res) => {
    res.send('<h2>About Page </h2>');
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