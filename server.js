const express = require("express");
const cp = require("child_process");
const path = require("path");
const routes = require('./routes');


const FileService = require('./services/FileService');


const app = express();

const port = 3000


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'./views'));

app.use(express.static(path.join(__dirname,'./static')));


const fileService = new FileService(process.argv[2]);
app.use('/',routes({fileService}));

app.listen(port,() => {
    console.log(`express server running on port ${port} !`);
});


// console.log(dirPaths);

// let url = "http://localhost:3000/";
// cp.exec(`start ${url}`);
