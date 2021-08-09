'use strict';

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

const server = express();
server.use(cors());

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
server.listen(PORT,() => {
    console.log(`Listening on PORT ${PORT}`);
})