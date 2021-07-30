$(document).ready(onReady);

function onReady() {
    console.log('Ready!');

    // On page load get calculations from server
    getCalculations();

    console.log('add button', $('#addButton'));
    $('#addButton').on('click, ')
    
    
}

function getCalculations() {
    // Make HTTP request to server to get /calculations endpoint
    //
    // Call the function in server.js
    $.ajax({
        //Tell AJAX what endpoint to hit
        method: 'GET',
        url: '/calculations'
    }).then((response) => {
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
                        ${calculation.inputOne}
                    </li>
                `);

            }
             
        });
}