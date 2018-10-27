let buttonSum = document.querySelector(".sum");
let buttonMinus = document.querySelector(".minus");
let buttonMultiply = document.querySelector(".multiply");
let buttonDivide = document.querySelector(".divide");

let num1 = document.querySelector(".num1");
let num2 = document.querySelector(".num2");
let num1Value = 0;
let num2Value = 0;

let resultField = document.querySelector(".result-number");


num1.addEventListener('change', function () {
    num1Value = num1.value;
});
num2.addEventListener('change', function () {
    num2Value = num2.value;
});

buttonSum.addEventListener('click', function () {
    resultField.textContent = sum(+num1Value, +num2Value);
});

buttonMinus.addEventListener('click', function() {
    resultField.textContent = minus(+num1Value, +num2Value);
});

buttonMultiply.addEventListener('click', function() {
    resultField.textContent = multiply(+num1Value, +num2Value);
});

buttonDivide.addEventListener('click', function() {
    resultField.textContent = divide(+num1Value, +num2Value);
});

