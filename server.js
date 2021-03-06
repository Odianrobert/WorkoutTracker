const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(morgan("dev")); //From class example

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI,{  
    useNewUrlParser:true,
    useFindAndModify:false
})

//mongodb://<dbuser>:<dbpassword>@ds251819.mlab.com:51819/heroku_584r6vn5

require("./routes/html")(app);
require("./routes/api")(app);

app.listen(PORT,function(){ 
    console.log(`App listening on Port ${PORT}`);
});

