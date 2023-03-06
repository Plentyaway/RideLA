const express = require('express'); // basically like c++ include statement
// includes express module

const app = express(); // make a new express app

const port = 3000;

// this get is part of our API
app.get('/', (req, res) => {
    res.send('<h1>RideLA Server</h1>');
})

// not an actual database like mongoDB, just a simple js array
// unrealistic for an actual database because whenenver you
// restart your server, your js array will be initialized again
// to default users. regular DB is not local
let users = [
    {id : 1, name: '@truebruin22'},
    {id : 2, name: '@uclapeep'},
    {id : 3, name: '@welovehoth'}    
]

// this is the middleware that parses our post JSON bodies
app.use(express.json());

app.get('/api/users/', (req, res) => {
    res.json({users}); // the {} are optional, they do destructuring
})

app.post('/api/users/', (req, res) => {
    const name = req.body.name;

    const newId = users.length + 1;
    
    users.push({id: newId, name: name});

    console.log(`Create user ${name} with ID ${newId}`);

    res.status(201).json({id: newId, name});
})

// this isn't normal way of deleting users but...
app.delete('/api/users/:id', (req, res) => {
    const id = req.params.id;
    const index = id - 1;
    if (index == -1 || index >= users.length) {
        res.status(404).json({error: `User with ID ${id} not found`});
    } else {
        users.splice(index, 1);
        console.log(`Deleted user with ID ${port}`);
        res.sendStatus(204);
    }
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})