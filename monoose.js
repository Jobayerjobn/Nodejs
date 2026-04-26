const schema = new Schema({
    name: String,
    age:  Number,
    meta: {
        fav: Number,
        vote: Number,
    }
});

const User = model('User', schema);

const doc = new User({
    name: 'Jobayer',
    meta: {
        fav: 12, 
        vote: 20,
    }
});

console.log(doc._id);
console.log(doc._id instanceof mongoose.Types.ObjectId);
console.log(schema.path('_id'));
console.log(doc.meta.vote);
console.log(doc.meta.fav);

console.log("600d" instanceof mongoose.Types.ObjectId);//false;


const schema = new Schema({
    _id: Number, // overwrite mongoose default '_id'

});

const Model = model('Model', schema);
const doc = new Model();

//await doc.save();
doc._id = 1;

doc.save();
console.log(doc);
console.log(doc._id);

/*
import mongoose from 'mongoose';

main().catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    console.log('DB connected');

}

//create schema 
const UserSchema = new mongoose.Schema({ // {} obj is database
    name: String, // Documents  value  type of string 

});

//create model
const userModel = mongoose.model('userModel', UserSchema);

//create document 
const jobayer = new userModel({name: 'Jobayer'});
console.log(jobayer.name);
await jobayer.save();
console.log(jobayer);
console.log(jobayer);
*/
import mongoose from 'mongoose';
const {Schema, model} = mongoose;

const nestedSchema = new Schema(
    {name: String}, 
    {_id: false},

)

const schema = new Schema({
    subDoc: nestedSchema,
    subArray: [nestedSchema],

});

const Test = model('Test', schema);

Test.create({
    subDoc: {name: 'test1'},
    subArray: [{name: 'test 2'}],
});

console.log(Test);

const nestedSchema = new Schema(
    {name: String},
    {_id: false},

);

const schema = new Schema({
    subDoc: nestedSchema,
    subArray: [nestedSchema],

});

const Test = model('Test', schema);

async function run(){
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
    const doc = await Test.create({
        subDoc: {name: 'Test 1'},
        subArray: {name: 'Test 2'},

    });
    console.log(doc);

};

run();

const {Schema, model} = mongoose;

async function run(){
    //connect mongoDB
    await mongoose.connect('mongodb://127.0.0.1:27017/test');

    const schema = new Schema({name: String, type: String},
        {//options object
            methods: { 
                findSimilarTypes(){
                    return this.model('Animal').find({type: this.type});

                }
            }
        }
    )
    
    const Animal = model('Animal', schema);
    await Animal.create({name: 'Tommy', type:'Dog'});
    await Animal.create({name: 'Funny', type: 'Dog'});
    const doc = new Animal({name: 'Random', type:'Dog'});
    await doc.save();
    
    
    //query
    const dogs = await doc.findSimilarTypes();
    console.log(dogs);
};

run();




run();

async function run() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');

    //create schema or database
    /*
    const schema = new Schema(
        {name: String, type: String},
        { //option objects
            statics: {
                findName(name){
                    return this.find({name: new RegExp(name, 'i')});


                }
            }

        }
    )

    */

    /*

    const schema = new Schema(
        {name: String, type: String}
    );

    schema.statics.findName =  function (name){
        return this.find({name: new RegExp(name, 'i')});

    };

    */
    const schema = new Schema({
        name: String, 
        type: String,

    });
    schema.static('findUserName', function(name){
        return this.find({name});
    });



    const Animal = model('Animal', schema);
    await Animal.deleteMany({});
    await Animal.create({name: 'Jobayer', type: 'Male'});
    await Animal.create({name: 'Joban', type: 'Male'});

    const man = await Animal.findUserName('Jobayer');
    console.log(man);



};

