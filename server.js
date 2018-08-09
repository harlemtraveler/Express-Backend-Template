const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const PORT = 3001;

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({etxtended: false}));
app.use(bodyParser.json());

app.get('/', (req,res) => {
  res.send("this is the Home page")
});

app.listen(PORT, () => {
  console.log(`[*] Listening on port ${PORT}`)
});
