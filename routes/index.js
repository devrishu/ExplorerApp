const express = require('express');

const router = express.Router();

module.exports = () => {
    router.get('/',(request,response)=>{
        response.render('pages/index',{pageTitle: 'Welcome55' });
    });
    return router;
};


