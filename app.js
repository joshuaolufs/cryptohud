// Require Libraries
const express = require('express');

// App Setup
const app = express();

// Set Assets Directory
app.use(express.static('assets'));

// Middleware
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Routes
app.get('/', (req, res) => {
    // log any query strnig
    console.log(req.query)

    // render the home page
    res.render('home');
});

app.get('/:symbol', (req, res) => {
    // grab the name from the path provided
    const symbol = req.params.symbol;
    // render the greetings view, passing along the name
    res.render('drilldown', { symbol });
});

// Start Server

app.listen(3000, () => {
    console.log('CryptoHUD listening on port localhost:3000!');
});