let first_name = prompt ("enter name");
let last_name = prompt ("enter surname");
let color = prompt ("enter favorite color");

let result = document.getElementById('ResultPrompt');
result.innerHTML = first_name + ' ' + last_name + ' ' + color;

console.log(result.innerHTML)

let x = prompt ("enter first number")
let y = prompt ("enter second number")
let num1 = parseInt(x);
let num2 = parseInt(y);

let result2 = document.getElementById('ResultPrompt2');
result2.innerHTML = num1 + num2;