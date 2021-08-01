$(document).ready(onReady);

// Declare global object
let newCalculation = {
    inputOne: $('#inputOne').val(),
    mathOperatorInput: $(this).attr('id'),
    inputTwo: $('#inputTwo').val(),
};


function onReady() {
    console.log('Ready!');

    // On page load get calculations from server
    getCalculations();

    console.log('equals button', $('#equalsButton'));

    $('#equalsButton').on('click', addCalculation);

    $('.calcButtons').on('click', mathOperators);

       
}

 function mathOperators () {
     let mathOperator = $(this).attr('id')
     console.log(mathOperator);
     newCalculation.mathOperatorInput = mathOperator;
 }



 function addCalculation() {
     let inputOne = $('#inputOne').val();
     let mathOperator = $(this).attr('id');
     let inputTwo = $('#inputTwo').val();
    newCalculation.inputOne = inputOne;
    newCalculation.inputTwo = inputTwo;
    newCalculation.mathOperatorInput = mathOperator;

     console.log('inside addCalculation');

     console.log('newCalculation is', newCalculation);
    
     // POST calculation to /calculations
     $.ajax({
         method: 'POST',
         url: '/calculations',
         // send quote data to the server
         data: newCalculation
     })
        .then((response) => {
         console.log('POST /calculations', response);
         // Refresh data from the server
         getCalculations();  
      })
        .catch((error) => {
          console.log('POST /calculations failed!', error);
          // Render error to the DOM
          $('body').append(`
              <h2>
                  Failed to save calculation! Please make sure all input fileds contain data.
              </h2>
          `);
        
     });

 }



function getCalculations() {
     // Make HTTP request to server to get /calculations endpoint
     //
     // Call the function in server.js
     $.ajax({
         //Tell AJAX what endpoint to hit
         method: 'GET',
         url: '/calculations'
     })
        .then((response) => {
             console.log('GET /calculations response', response);
            
             // Render calculations with jQuery
             let calculationsList = $('#calculations');
             console.log('calculations list element', calculationsList);

             // loop thropugh the array of calculations
             calculationsList.empty();
             for(let i=0; i<response.length; i++) {
                 let calculation = response[i];
                 // Render <li> with each calculation
                 calculationsList.append(`
                     <li>
                         ${calculation.inputOne}  ${calculation.inputTwo} = ${calculation.total}
                     </li>
                 `);

             }
             
         });
 }