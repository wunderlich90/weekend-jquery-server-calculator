console.log('in server.js');

// Load the express library from node_modules/express
const express = require('express');

// Load the body-parser module
const bodyParser = require('body-parser');

// Create app (server)
const app = express();

// Data
const calculationsArray = [
    {
        inputOne: 2,
        inputTwo: 3,
        total: 5
    },
    {
        inputOne: 6,
        inputTwo: 3,
        total: 3
    },
    {
        inputOne: 5,
        inputTwo: 4,
        total: 20
    },
    {
        inputOne: 6,
        inputTwo: 3,
        total: 2
    }
]

// Tell express where to find public files
app.use(express.static('./server/public'));

// Setup body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

// Listen for requests coming from a specific url
// http://localhost:5000/calculations
app.get('/calculations', function(req, res) {
    console.log('Ready to send back some calculations');
    console.log('request.route.path is', req.route.path);

    // Send data back to the client
    res.send(calculationsArray);
    
});

// POST /calculations
app.post('/calculations', function (req, res) {
    console.log('New calculation received');

    //Bodyparser gives us req.body
    console.log('req.body', req.body);
    let newCalculation = req.body;
    calculations.push(newCalculation);

    // In the event of empty input fields send an error message
    if (!newCalculation.numberOne || !newCalculation.numberTwo) {
        // Error 400 w/message
        res.status(400).send( {
            message: 'Missing required field'
        });
        // End the function 
        return;
    }

    res.sendStatus(200);
    
});

// Listen for requests
const port = 5000;
app.listen(port, function(){
    console.log('App is up and running on localhost:5000');
    
});

function calculator() {

}

function add(inputOne, inputTwo) {
    let sumTotal = inputOne = inputTwo;
    return sumTotal;
}




