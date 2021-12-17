const express = require("express");

const app = express();

const port = 3000

app.get('/',(request,response)=>{
    response.send('Hellp Express :) ');
});
app.listen(port,() => {
    console.log(`express server running on port ${port} !`)
});