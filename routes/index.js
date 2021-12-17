const express = require('express');

const router = express.Router();

module.exports = (params) => {
    router.get('/',(request,response)=>{
        const {fileService} = params;
        const dirContents = fileService.getData();
        return response.json(dirContents);
    });
    return router;
};


