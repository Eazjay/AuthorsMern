const express = require("express");
const app = new express();
const port = 8000;
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


require('./server/config/author.config');
require('./server/routes/author.routes')(app);
app.listen(port, ()=> console.log(`Listening on port ${port}`));