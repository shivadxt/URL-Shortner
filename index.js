const express = require ("express");

const app = express();

const {mongodbConnect} = require ("./connect")

const urlRoute = require("./routes/Url");

const PORT = 8001;

mongodbConnect("mongodb://localhost:27017/shorl-url")
.then(()=> console.log('Connected to MongodB'));

app.use("/url",urlRoute);

app.listen(PORT, ()=> console.log(`App running at port ${PORT}`));