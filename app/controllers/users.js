let users = [];
exports.getUsers = (req,res)=>{
    
    res.send(users);

}

exports.createUsers =(req, res) => {
    const user = req.body;
    console.log(user);

    users.push(user);
    res.send(`User with the username : ${user.name} added to the batabase .`);
}

exports.getUser=(req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
}

exports.deleteUser=(req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);

    res.send(`User with the id ${id} deleted from the database. `);
}

exports.updateUser=(req, res) => {
    const { id } = req.params;
    const { name, pet } = req.body;
    const user = users.find((user) => user.id === id);
    if (name) user.name = name; //等同於 if(name){ user.name = name; } ，下兩行以此類推
    if (pet) user.pet = pet;

    res.send(`User with the id ${id} has been updated`);
}