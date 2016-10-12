var React = require('react');
var ReactDOM = require('react-dom');

var objOne = {
  name: 'Andrew',
  location: 'Philadelphia'
}

var objTwo = {
  age: 25,
  ...objOne
}

console.log(objTwo);

ReactDOM.render(
  <h1>Boilerplate App!</h1>,
  document.getElementById('app')
);
