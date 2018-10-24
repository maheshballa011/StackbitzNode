//initialize express router
let router = require('express').Router();
let userController = require('./controllers/userController');

//set default api response
router.get('/', function(req, res){
    res.json({
        status: 'api its working',
        message: 'welcome to stackbitz crafted its working'
    });
});


router.route('/users')
.get(userController.index)
.post(userController.new);


router.route('/users/:userId')
.get(userController.view)
    .patch(userController.update)
    .put(userController.update)
    .delete(userController.delete);



//export routes
module.exports = router;
