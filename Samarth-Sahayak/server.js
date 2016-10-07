var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var morgan = require('morgan');
var methodOverride = require('method-override');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/samarth-shayak');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());


app.use(express.static(__dirname + "/webapp"));

var circleSchema = new Schema({
    name: { type: String, require: true },
    circleDiscription: { type: String },
    circleType: { type: String, require: true },
    visuality: { type: String, require: true },
    Admin: { type: String, require: true },
    profile: { type: String }
}, { collection: 'circle' });

var circle = mongoose.model('Circle', circleSchema);

app.get('/circle', function(req, res) {
    console.log("get request");

    console.log("connected to url");
    circle.find(function(err, data) {
        console.log(data);
        if (err) {
            console.log(err);
        } else if (data.length) {
            console.log(data);
            res.json(data);
        } else {
            console.log("circle not find");
        }
    });

});

app.listen(8081);
console.log("server running at port 8081");
