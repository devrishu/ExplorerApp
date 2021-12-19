const express = require('express');

const router = express.Router();

module.exports = (params) => {
    router.get('/',async (request,response)=>{
      response.render('pages/index',{pageTitle:'Welcome rishu'});
    });

    router.get('/fileservice',async (request,response)=>{
        const {fileService} = params;
        const dirContents = fileService.getList();
        return response.json(dirContents);
    });

    router.get('/fileservice/readFile',async (request,response)=>{
      const {fileService} = params;
      const {fileName} = request.query;
      console.log(fileName);
      const fileContent = fileService.getFileContent(fileName);
      return response.json(fileContent);
  });




    return router;
};


