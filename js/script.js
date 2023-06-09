let name = prompt ("enter name");
let surname = prompt ("enter surname");
let color = prompt ("enter favorite color");

const result = document.getElementById('ResultPrompt');
result.innerHTML = name + ' ' + surname + ' ' + color;