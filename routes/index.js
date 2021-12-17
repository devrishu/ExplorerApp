const express = require('express');

const router = express.Router();

module.exports = (params) => {
    router.get('/',async (request,response)=>{
        const {fileService} = params;
        const dirContents = await fileService.getData();
        return response.json(dirContents);
    });
    return router;
};

