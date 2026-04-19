/*
//Problem-1
import express, { application } from 'express';


const app = express();

app.get('/', (req, res) => {
    res.send('Hello how are you?');

})

app.listen(3000, () => {
    console.log('Server running port on 3000');
})

*/


/*

app.get('/', (req, res) => {
    res.json({
        success: true,
        massage: 'Server running'

    })
})



const http = require('node:http');

const hostname = '127.0.0.1';
const port = 4000;

const server = http.createServer((req, res) => {
    res.status = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Server is running');

})

server.listen(port, hostname, () => {
    console.log(`Server is running ${http} port on ${port}`);
})

*/

/*
//Problem-2

import express from 'express';
import {getUser} from './handle';

const app = express();

app.get('/', getUser);

app.listen(3000);


*/


/*

//Problem-3
import express from 'express';
import getUser from './route.js';


const app = express();

//express middleware 
app.use(express.json());

//base route
app.use('/', getUser);

//404 handler
app.use((req, res) => { 
    res.status(404).json({massage: 'Router not found'});

})

app.listen(4000, () => {
    console.log('Server is running');
});

*/

/*
// Problem-4
import express from 'express';

const app = express();

//app.use(express.json());

app.get('/about', (req, res) => {
    res.status(201).json({
        status: true,
        name: 'Jobayer',
        email: 'jobayerjoban0048@gmail.com',

    })
})

app.listen(3000);

*/

/*
//Problem-5
import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(201).json([
        {
            name: 'jobayer',
            age: 19,
            email: 'jobayerjoban0048@gmail.com',

        },
        {
            name: 'dadu', 
            age: 19, 
            email: 'dadu@gmail.com',

        }
    ])
})

app.listen(3000);


//Problem-6
import express from 'express';
const app = express();

app.use(express.json());

app.post('/', (req, res) => {
    console.log(req.body);
    res.status (201).json({
        success: true,
        massage: 'Data Delivered successfully',

    })
})

app.listen(3000);
*/

/*
//Problem-7
import express from 'express';
const app = express();
const store = [];

app.use(express.json());

app.post('/', (req, res) => {
    const data = req.body;
    console.log(data);
    store.push(data);

    res.status(201).json({
        success: true,
        message: 'requested received',
        data: store
    })
})

app.listen(3000);

*/

/*
Problem-8
import express from 'express';

const store = [];

const app = express();
app.use(express.json());

//custom middleware
app.use((req, res, next) => {
    console.log('Request received');
    next();

})

app.post('/', (req, res) => {
    const data =  req.body;
    console.log(body);

    store.push(data);

    res.status(201).json({
        success: true,
        name: 'Jobayer', 
        email: 'jobayerjoban0048@gmail.com',
        data: store
    })

})
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

*/

/*
//problem-9
import express from 'express';

const app = express();
const users = [
    {
        id: 1, 
        name: 'Jobayer',
        age: 19,
        email: 'jobayerjoban0048@gmail.com',

    },
    {
        id: 2,
        name: 'Joban',
        age: 19,
        email: 'joban0048@gmail.com',

    }
];

app.use(express.json());

app.get('/', (req, res) => {
    res.status(201).json({
        success: true,
        data: users
    });
});

app.use((req, res) => {
    res.status(404).send('Not Found');

});

app.listen(3000, () => {
    console.log('Server is running on port 3000');

});



*/

/*

import express from 'express';

const app = express();

app.use(express.json());

app.get('/users', (req, res) => {
    res.status(201).json({
        success: true,
        name: 'Jobayer',
        age: 29,
        email: 'jobayerjoban0048@gmail.com'
    })
})

//404 handler
app.use((req, res) => {
    res.status(404).send('Not Found');

})

app.listen(3000, () => {
    console.log('Server is running on port 3000');

});

*/

/*

//Problem-10
import express from 'express';

const app = express();

const users = [
    {
        name: 'Jobayer',
        age: 19,
        email: 'jobayerjoban0048@gmail.com',
        id: 1,
    },
    {
        name: 'Joban',
        age: 19,
        email: 'joban0048@gmail.com',
        id: 2,

    }
];

app.use(express.json());




app.get('/users', (req, res) => {
    res.status(201).json({
        success: true,
        name: 'Jobayer',
        data: users,
    })
});

app.use((req, res, next) => {
    res.status(404).send('Not Found');
    next();
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');

});

*/

/*
//Problem-11
import express from 'express';

const app = express();

const  users = [
    {
        name: 'Jobayer',
        email: 'jobayerjoban0048@gmail.com',
        age: 19,
        id: 1
    },
    {
        name: 'Joban',
        email: 'joban0048@gmail.com',
        age: 19,
        id: 2
    }
];

app.use(express.json());

app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const data = users.find(user => user.id === id);

    if(!data) {
        return res.status(404).send('Not Found');

    }
    res.status(200).json({
        success: true,
        user: data,

    });


});

app.listen(4000, () => {
    console.log('Server is running on port 3000');

});

*/

/*
//Problem-12
import express from 'express';

const app = express();
const dataBase = [];
let userId = 1;
app.use(express.json());

app.get('/users', (req, res) => {
    const {name, email} = req.body;

    if(!name || !email){
        return res.status(400).json({
            success: false,
            message: 'Name and email and required',

        })
    }
    const newDataBase = {
        id: userId++,
        name, 
        email
    }
    dataBase.push(newDataBase);

    res.status(201).json({
        success: true,
        name: 'Jobayer',
        user: newDataBase
    });
});

app.listen(4000, () => {
    console.log('Server is running port on 4000');
});

*/

/*
//Problem-13
import express from 'express';

const app = express();
const dataBase = [
    {
        name: 'Jobayer', 
        email: 'jobayerjoban0048@gmail.com',
        id: 1,

    }
]
app.use(express.json());

app.put('/users/:id', (req, res) => {
    const id = parsInt(req.params.id);
    const findUserId = dataBase.find(f => f.id === id);
    if(!findUserId){
        return res.status(400).json({
            success: false,
            massage: 'UserId not found',

        });
    };

    const {name, email} = req.body;
    if(name) findUserId.name = name;
    if(email) findUserId.email = email;

    res.status(201).json({
        success: true,
        message: 'update userID',
        data: findUserId
    })
})

app.listen(3000, () => {
    console.log('Server port is running ');
})
*/

/*
//Problem-15
import express from 'express';

const app = express();

const dataBase = [

    {name: 'Jobayer', age: 19, id: 1},
    {name: 'Joban', age: 21, id: 2},
    {name: 'Dadu', age: 25, id: 3}

];

app.use(express.json());

app.get('/users', (req, res) => {
    const {name} = req.query;

    let findUsers = dataBase;
    if(name){
        findUsers = dataBase.filter(u => u.name.toLowerCase().includes(name.toLowerCase()));
        
    }
    res.status(200).json({
        success: true,
        data: findUsers

    });

});

app.listen(3000, () => {
    console.log('Server is running port on 3000');
    
})

*/
/*
import express from 'express';

const app = express();

app.use(express.json());

const dataBase = [
    {name: 'Jobayer', age: 19, id: 1},
    {name: 'Joban', age: 20, id: 2}, 
    {name: 'Dadu', age: 21, id: 3},

];

app.get('/users', (req, res) => {
    const name = req.query.name;

    let findUsers = dataBase;
    if(name){
        findUsers = dataBase.filter(u => u.name.toLowerCase().includes(name.toLowerCase()));
        if(findUsers.length === 0){
            res.status(404).json({
                success: false,
                message: 'Not Found'
            })
        }
    }
    res.json(findUsers);

})

app.listen(3000, () => {
    console.log('Server is running port on 3000');

})

*/

/*
//Pagination 
import express from 'express';

const app = express();

const users = [
  { id: 1, name: "Jobayer" },
  { id: 2, name: "Rahim" },
  { id: 3, name: "Joban" },
  { id: 4, name: "Karim" },
  { id: 5, name: "Sakib" },
  { id: 6, name: "Tamim" },
  { id: 7, name: "Rakib" },
  { id: 8, name: "Nadim" },
  { id: 9, name: "Asif" },
  { id: 10, name: "Rafi" },
  { id: 11, name: "Rony" }
]
app.use(express.json());

app.get('/users', (req, res) => {
    const {name, page = 1, limit = 5} = req.query;
    let findUsers = users;

    if(name){
        findUsers = users.filter(u => u.name.toLowerCase().includes(name.toLowerCase()));
         
    }

    //pagination
    const pageNumber = Number(page);
    const limitNumber = Number(limit);

    const startIndex = (pageNumber - 1) * limitNumber;
    const endIndex = pageNumber * limitNumber;

    const paginationNumbers = findUsers.slice(startIndex, endIndex);
    res.status(200).json({
        success: true,
        total: findUsers.length,
        page: pageNumber,
        limit: limitNumber,
        data: paginationNumbers,


    });
});

app.listen(3000, () => {
    console.log('Server is running port on 3000');

});

*/


/*
//Problem-17
import express from 'express';
const app = express();

const dataBase = [
    {name: 'Jobayer', age: 19, id: 1},
    {name: 'Joban', age: 19, id: 2},
    {name: 'Dadu', age: 20, id: 3},

];

app.get('/users', (req, res, next) => {
    try {
        const {name} = req.query;

        let findUsers = dataBase;
        if(name){
            findUsers = dataBase.filter(n => n.name.toLowerCase().includes(name.toLowerCase()));

        }
        if(findUsers.length === 0){
            const error = new Error('User not found');
            error.status = 404;
            throw error;

        }
        res.json({
            success: true,
            message: findUsers,

        })
    }catch(err){
        next(err);

    }
});

app.use((err, req, res, next) => {
    const statusCode = err.status || 500;
    res.status(statusCode).json({
        success: false,
        message: err.message || 'Invalid user',


    });

});

app.listen(3000, () => {
    console.log('Server is running  on port 3000');

});


*/