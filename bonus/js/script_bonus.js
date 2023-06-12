
let x = prompt ("enter first number")
let y = prompt ("enter second number")
let num1 = parseInt(x);
let num2 = parseInt(y);

const result2 = document.getElementById('ResultPrompt2');
result2.innerHTML = num1 + num2;




function add()
         {
           let number1, number2, sum;
           number1 = parseInt(document.getElementById("firstnumber").value);
           number2 = parseInt(document.getElementById("secondnumber").value);
           sum = number1 + number2;
           document.getElementById('answer').innerHTML = sum
         }