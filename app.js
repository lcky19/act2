const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes/index');

app. set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.use('/', routes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});