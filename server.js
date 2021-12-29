const express = require("express");

const cp = require("child_process");
const path = require("path");
const cookieSession = require("cookie-session");
const routes = require('./routes');

const app = express();
const http = require('http');

const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const FileService = require('./services/FileService');
const FileSystemChangeService = require('./services/FileSystemChangeService');




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
const fileSystemChangeService = new FileSystemChangeService(process.argv.slice(2),io);

app.use('/',routes({fileService}));

server.listen(port, () => {
    console.log('listening on *:3000');
  });

 const url = "http://localhost:3000/";
 cp.exec(`start ${url}`);
fileSystemChangeService.startWatchingFileChanges();
// const theOneFunc = delay => {
   
//         io.emit('file change','file change');
//         console.log('file change emit');
        
//   };
//   setTimeout(theOneFunc, 4 * 1000, 4);
//   setTimeout(theOneFunc, 8 * 1000, 8);





