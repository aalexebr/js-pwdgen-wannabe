let first_name = prompt ("enter name");
let last_name = prompt ("enter surname");
let color = prompt ("enter favorite color");

const result = document.getElementById('ResultPrompt');
result.innerHTML = first_name + ' ' + last_name + ' ' + color;

console.log(result.innerHTML)

let x = prompt ("enter first number")
let y = prompt ("enter second number")
let num1 = parseInt(x);
let num2 = parseInt(y);

const result2 = document.getElementById('ResultPrompt2');
result2.innerHTML = num1 + num2;
// if (result2 != NaN) {
//     document.getElementById("ResultPrompt2").innerHTML =
//     "please enter numbers";
//   }

console.log(result2.innerHTML)



function add()
         {
           var number1, number2, sum;
           number1 = parseInt(document.getElementById("firstnumber").value);
           number2 = parseInt(document.getElementById("secondnumber").value);
           sum = number1 + num2;
           document.getElementById('answer').innerHTML = sum
         }