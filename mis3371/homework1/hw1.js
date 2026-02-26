/*
Name: Salma Abuzaher
Date Created: 02/26/2026
Date Modified: 02/26/2026
Purpose: JS for Homework 1 Patient Registration Form
*/

//dynamic date code
const d = new Date();
let text = d.toLocalDateString();
document.getElementByID("today").innerHTML = text;

//name slider code
let slider = document.getElementById("range");
let output = document.getElementById("range_slider");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
};
