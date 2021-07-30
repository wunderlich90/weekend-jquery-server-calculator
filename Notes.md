TODO

[ ] Logic for the calculator MUST be on the server side
[ ] Create a user interface that inputs two values and performs a mathematical
    operation
    [x] Server Side Calculator title
    [x] 2 Input fields
    [x] Add, subtract, multiply and divide buttons
    [x] equals button (submit)
    [x] clear button
    [x] total and an unorder list of previous calculatios display in the body on
        the DOM
[ ] Objects are created when the "submit" button is clicked
[ ] Objects are sent to the server via POST
[ ] Clear button clears all input fields
[ ] Build out server side to compute the the numbers
    [ ] Should perform addition, subtraction, multiplication and division
    [ ] Once the calculation is complete send back the OK (?)
    [ ] Do a GET request after the POST to get the actual calculation
[ ] Historical record of all calculations on the server
[ ] Display a list of the calculations on the DOM using a GET request
[ ] Update the list when a new calculation is performed

[ ] DO NOT USE EVAL()!!!!


STRETCH

[ ] Only allow a POST call if all necessary info is present in the input fields
[ ] Allow user to clear the history by clicking a button
     [ ] Use DELETE request!
[ ] Allow user to click on any entry in the history and list to 
    rerun that calculation and display it to the interface
[ ] Deploy to Heroku (?)


