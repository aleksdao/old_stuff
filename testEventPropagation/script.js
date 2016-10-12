// Code goes here

var button = document.getElementById('baybutton');
console.log(button);

console.log(document)

var buttons = document.getElementsByClassName('button1');
console.log(buttons)

var buttons1 = document.getElementsByTagName('button');

console.log(buttons1)


button.addEventListener('click', function () {
  console.log(button);
  alert('this has been clicked');
})


var div = document.getElementsByTagName('div')[0];
div.addEventListener('click', function () {
  alert('bubbled');
})
