'use strict';

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

const server = express();
server.use(cors());
server.use(express.json());

const PORT = process.env.PORT;


//MongoDB 
mongoose.connect('mongodb://localhost:27017/cat-301d27', {useNewUrlParser: true, useUnifiedTopology: true});

// create a schema
const kittySchema = new mongoose.Schema({
    catName: String,
    breed: String
});

const ownerSchema = new mongoose.Schema({
    ownerName: String,
    cats : [kittySchema]
});

//compile the schema into a model
const myCatModel = mongoose.model('Kitten', kittySchema);
const ownerModel = mongoose.model('Owner', ownerSchema);

//Seeding a data
function seedKittenCollection() {
    const frankie = new myCatModel({ 
        catName: 'Frankie',
        breed : 'angora'
    });

    const sherry = new myCatModel({ 
        catName: 'Sherry',
        breed : 'American'
    });

    const fluffy = new myCatModel({ 
        catName: 'Fluffy',
        breed : 'American'
    });
    //save the data that we created 
    frankie.save();
    sherry.save();
    fluffy.save();
}

// seedKittenCollection();

function seedOwnerCollection() {
    const roaa = new ownerModel({
        ownerName: 'Roaa',
        cats : [
            {
                catName: 'fluffy',
                breed: 'American'
            },
            {
                catName: 'sherry',
                breed: 'angora'
            }
        ]
    })

    const osaid = new ownerModel({
        ownerName: 'Osaid',
        cats : [
            {
                catName: "Blacky",
                breed: "British"
            }
        ]
    })

    osaid.save();
    roaa.save();
}

// seedOwnerCollection();

// Routes
// http://localhost:3010/
server.get('/',homeHandler);
server.get('/cat',getCatsHandler);
server.post('/addCat',addCatHandler);
server.delete('/deleteCat/:index',deleteCatHandler);

//Handlers
function homeHandler(req,res) {
    res.send('Home Route');
}

// http://localhost:3010/cat?name=roaa
function getCatsHandler(req,res) {
    const reqOwnerName = req.query.name;
    // search
    ownerModel.find({ownerName:reqOwnerName},function(err,resultData){
        if(err) {
            console.log('Error');
        }
        else {
            console.log(resultData);
            console.log(resultData[0].cats);
            res.send(resultData[0].cats);
        }
    })
}

// http://localhost:3010/addCat?ownerName....
function addCatHandler(req,res) {
    console.log(req.body);
    // const ownerName = req.body.ownerName;
    // const catName = req.body.catName;
    // const catBreed = req.body.catBreed;
    
    // Restructuring assignment
    const {ownerName, catName, catBreed } = req.body;
    ownerModel.find({ownerName : ownerName},(err,resultData) => {
        if(err)
        {
            res.send('not working');
        }
        else
        {
            resultData[0].cats.push({
                catName : catName,
                breed : catBreed
            })
            resultData[0].save();
            res.send(resultData[0].cats);
        }
    })
    
}

// http://localhost:3010/deleteCat/1
function deleteCatHandler(req,res) {
    const index = req.params.index;
    const {ownerName} = req.query;
    ownerModel.find({ownerName : ownerName}, (err,resultData) =>{
        const newCatArr = resultData[0].cats.filter((cat,idx) => {
            console.log(typeof idx, typeof index)
            if(idx != index)
            {
                return true;
            }
        })
        console.log('new array : ', newCatArr)
        resultData[0].cats = newCatArr;
        resultData[0].save();
        res.send(resultData[0].cats);
    })
}


server.listen(PORT,() => {
    console.log(`Listening on PORT ${PORT}`);
})