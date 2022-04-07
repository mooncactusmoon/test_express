module.exports = app => {
    const userController = require('../controllers/users');
    var router = require("express").Router();

    let users = [];

    //get
    router.get('/users',userController.getUsers)
    //post
    router.post('/users',userController.createUsers)
    //get id
    router.get('/users/:id',userController.getUser)
    //del id
    router.delete('/users/:id',userController.deleteUser)
    //update id
    router.patch('/users/:id',userController.updateUser)

    app.use('/', router);
}

