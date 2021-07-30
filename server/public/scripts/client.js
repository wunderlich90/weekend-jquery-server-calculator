$(document).ready(onReady);

function onReady() {
    console.log('Ready!');
    
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

        .then((response) function() {
            console.log('GET /calculations response');
            
        })
}