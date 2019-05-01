var express = require('express')
var app = express()
var path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.render('pages/index')
})

const server = app.listen(process.env.PORT || 5000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});