/*
import express from 'express';

const app = express();

app.use(express.json());

const dataBase = [
    {id: 1, name: 'Jobayer'},
    {id: 2, name: 'Joban'}
];


app.get('/users', (req, res) => {
    res.json(dataBase);

})

app.listen(3000, () => {
    console.log('Server is running ');

});

import express from 'express';
const app = express();
app.use(express.json());
const users = [
    {id: 1, name: 'Jobayer'},
    {id: 2, name: 'Joban'}

];

app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);

    if(isNaN(id)){
        return res.status(404).json({
            success: false,
            message: 'Invalid users',

        });

    };

    let findSingleUser = users.find(u => u.id === id);

    if(!findSingleUser){
        return res.status(404).json({
            success: false,
            message: 'User not found',

        });
    };

    res.status(200).json({
        success: true,
        user: findSingleUser,

    });
});

app.listen(3000, () => {
    console.log('Server is running port on 3000');

});
*/
import express from 'express';
import mongoose from "mongoose";



mongoose.connect('mongodb://127.0.0.1:27017/testDB')
.then(() => console.log('mongoDB connected'))
.catch(err => console.log(err));

