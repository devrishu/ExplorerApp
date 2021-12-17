const express = require("express");
const cp = require("child_process");
const path = require("path");



const app = express();

const port = 3000

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'./views'));

app.use(express.static(path.join(__dirname,'./static')));

app.get('/',(request,response)=>{
    //response.sendFile(path.join(__dirname,'./static/index.html'));
    response.render('pages/index',{pageTitle: 'Welcome' });
});
// app.get('/',(request,response)=>{
//     response.send('Hellp Express :) ');
// });


app.listen(port,() => {
    console.log(`express server running on port ${port} !`);
});

console.log("restarting");
// const dirPaths = process.argv.slice(2);
// console.log(dirPaths);

// let url = "http://localhost:3000/";
// cp.exec(`start ${url}`);
// const createWindow = () => {
//     const win = new BrowserWindow({
//       width: 800,
//       height: 600
//     })
  
//     win.loadFile('index.html')
//   }

//   uiapp.whenReady().then(() => {
//     createWindow()
//   })