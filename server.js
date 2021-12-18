const express = require("express");
const cp = require("child_process");
const path = require("path");
const cookieSession = require("cookie-session");
const routes = require('./routes');


const FileService = require('./services/FileService');


const app = express();

const port = 3000

app.set('trust proxy', 1);
app.use(cookieSession({
    name : 'session',
    keys: ['dkfhdjkf13872738dflkd','dkjfhsdj37373kdf'],
    
}));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'./views'));

app.use(express.static(path.join(__dirname,'./static')));


const fileService = new FileService(process.argv.slice(2));
app.use('/',routes({fileService}));

app.listen(port,() => {
    console.log(`express server running on port ${port} !`);
});


// console.log(dirPaths);

// let url = "http://localhost:3000/";
// cp.exec(`start ${url}`);
