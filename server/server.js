console.log('in server.js');

// Load the express library from node_modules/express
const express = require('express');

// Load the body-parser module
const bodyParser = require('body-parser');

//Create app (server)
const app = express();

// Data
const calculationsArray = [];

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

//  // GET /first-calculation
//  app.get('/first-calculation', (req,res) => {
//      res.send(calculationsArray[0]);
//  });

 // POST /calculations
 app.post('/calculations', (req, res) => {
    console.log('New calculation received');
     
    //Bodyparser gives us req.body
    console.log('req.body', req.body);
    let newCalculation = req.body;
  
    // Math operations
    let mathOperator = newCalculation.mathOperatorInput;
    let overAllTotal

    if (mathOperator==='+') {
        let sumTotal = Number(newCalculation.inputOne) + Number(newCalculation.inputTwo);
        newCalculation.total = sumTotal;

    }
    else if (mathOperator=== '-') {
        let subtractionTotal = Number(newCalculation.inputOne) - Number(newCalculation.inputTwo);
        newCalculation.total = subtractionTotal;
    }
    else if (mathOperator=== '*') {
        let multiplicationTotal = Number(newCalculation.inputOne) * Number(newCalculation.inputTwo);
        newCalculation.total = multiplicationTotal;
    }
    else if (mathOperator=== '/') {
        let divisionTotal = Number(newCalculation.inputOne) / Number(newCalculation.inputTwo);
        newCalculation.total = divisionTotal;
    }
    calculationsArray.push(newCalculation);


    // In the event of empty input fields send an error message
    if (!newCalculation.inputOne || !newCalculation.inputTwo) {
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

// function calculator() {
//     let inputOne = newCalculation.inputOne;
//     let inputTwo = newCalculation.inputTwo;
//     let mathOperator = newCalculation.mathOperatorInput;

//     if (mathOperator==='+') {
//         add(inputOne, inputTwo);
//         newCalculation.total = sumTotal;

//     }
//     else if (mathOperator=== '-') {
//         subtract(inputOne, inputTwo);
//         newCalculation.total = subtractionTotal;
//     }
//     else if (mathOperator=== '*') {
//         multiply(inputOne, inputTwo);
//         newCalculation.total = multiplicationTotal;
//     }
//     else if (mathOperator=== '/') {
//         divide(inputOne, inputTwo);
//         newCalculation.total = divisonTotal;
//     }


// function add() {
//     let sumTotal = newCalculation.inputOne + newCalculation.inputTwo;
//     return sumTotal;
// }

// function subtract() {
//     let subtractionTotal = newCalculation.inputOne - newCalculation.inputTwo;
//     return subtractionTotal;
// }

// function multiply() {
//     let multiplicationTotal = newCalculation.inputOne * newCalculation.inputTwo;
//     return multiplicationTotal;
// }

// function divide() {
//     let divisionTotal = newCalculation.inputOne / newCalculation.inputTwo;
//     return divisionTotal;
// }




