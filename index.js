const express = require('express');

const app = express();

const routes = require('./routes');

app.use(express.static('public'))

app.set('view engine', 'ejs');

app.use(routes);


app.listen(3000, () => {
    console.log('Listening on PORT : ' + 3000);
})
