module.exports = app => {
    var router = require("express").Router();
    let users = [];

    //get
    router.get('/users', (req, res) => {
        res.send(users);
    })
    //post
    router.post('/users', (req, res) => {
        const user = req.body;
        console.log(user);

        users.push(user);
        res.send(`User with the username : ${user.name} added to the batabase .`);
    })
    //get id
    router.get('/users/:id', (req, res) => {
        const { id } = req.params;
        const foundUser = users.find((user) => user.id === id);

        res.send(foundUser);
    })
    //del id
    router.delete('/users/:id', (req, res) => {
        const { id } = req.params;
        users = users.filter((user) => user.id !== id);

        res.send(`User with the id ${id} deleted from the database. `);
    })
    //update id
    router.patch('/users/:id', (req, res) => {
        const { id } = req.params;
        const { name, pet } = req.body;
        const user = users.find((user) => user.id === id);
        if (name) user.name = name; //等同於 if(name){ user.name = name; } ，下兩行以此類推
        if (pet) user.pet = pet;

        res.send(`User with the id ${id} has been updated`);
    })



    app.use('/', router);
}

