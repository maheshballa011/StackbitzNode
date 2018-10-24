//initialize express router
let router = require('express').Router();

//set default api response
router.get('/', function(req, res){
    res.json({
        status: 'api its working',
        message: 'welcome to stackbitz crafted its working'
    });
});

//export routes
module.exports = router;
