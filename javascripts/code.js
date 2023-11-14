/*
- Create a repo called Marks and clone it on your laptop.
- Open the cloned repo in your VS code.
- Your program should allow the user to enter their marks via an input element. Such as 99, and you should display A on a label after pressing on a button.
NB: Make use of a switch not if statement
Marks       Grade
=====       =====
100         A+
90 - 99     A
80 - 89     B+
70 - 79     Distinction
60 - 69     C+
50 - 59     Passed
Below 50    Failed
*/


let btnSubmit = document.querySelector('[data-submit]')

// Create a Function:
function displayMarks() {
    let marks = document.querySelector('[data-marks]').value

    // Label's Reference
    let output = document.querySelector('[data-output]')

    //Switch
    switch (true) {
        case marks < 50:
            output.textContent = `Sorry, you failed, don't try again, you are gae`;
        break;
        case marks <= 59:
            output.textContent = `Passed`;
        break;
        case marks <= 69:
            output.textContent = `C+`;
        break;
        case marks <= 79:
            output.textContent = `Distinction`;
        break;
        case marks <= 89:
            output.textContent = `B+`;
        break;
        case marks <= 99:
            output.textContent = `A`;
        break;
        case marks == 100:
            output.textContent = `A+`;
        break;
        default:
            output.textContent = 'Crister Ronaldo, Sewey'
            break;
    }
}
btnSubmit.addEventListener('click', displayMarks)


// THIS WAS MY ATTEMPT FOR THE MARKS CALCULATOR (its not functioning correctly):

// let points = prompt("What is your percentage point total?");

// if(points<=90&&points>=99) {
//     alert("A");
// }
// if(points<=80&&points>=89) {
//     alert("B+");
// }
// if(points<=70&&points>=79) {
//     alert("Distinction");
// }
// if(points<=60&&points>=69) {
//     alert("C+");
// }
// if(points<=50&&points>=59) {
//     alert("Passed");
// }
// if(points<=50&&points) {
//     alert("Failed");
// }