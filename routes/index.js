const express =  require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    //render index.ejs file
    res.render('index');
});

module.exports = router;