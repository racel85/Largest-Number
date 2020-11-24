'use strict';

// write some JavaScript code that makes the user enter three numbers.
// Then write the necessary if-statements to decide which of the number is the largest

function largest() {
    let num1 =  Number(document.getElementById('A').value);
    let num2 =  Number(document.getElementById('B').value);
    let num3 =  Number(document.getElementById('C').value);

    if (num1 >= num2 && num1 >= num3) {
        window.alert(num1 +' ' + 'is the largest number');
    } else if (num2 >= num1 && num2 >= num3) {
        window.alert(num2 +' ' + 'is the largest number')
    } else if (num3 >= num1 && num3 >= num1) {
        window.alert(num3 +' ' + 'is the largest number');
    }
}