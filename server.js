const express = require("express");
const cp = require("child_process")

const app = express();

const port = 3000

app.get('/',(request,response)=>{
    response.send('Hellp Express :) ');
});
app.listen(port,() => {
    console.log(`express server running on port ${port} !`)
});

const dirPaths = process.argv.slice(2);
console.log(dirPaths);

let url = "http://localhost:3000/";
cp.exec(`start microsoft-edge:${url}`);