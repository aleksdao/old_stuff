const React = require('react');
const ReactDOM = require('react-dom');
let GreeterMessage = require('GreeterMessage');
let GreeterForm = require('GreeterForm');

var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'Andrew',
      message: 'This is the default message'
    }
  },
  getInitialState: function () {
    return {
      name: this.props.name,
      message: this.props.message
    }

  },
  handleNewSubmit: function (updates) {
    // e.preventDefault();

    this.setState(updates);


  },
  render: function () {
    var name = this.state.name;
    var message = this.state.message;

    return (

      //we can only return ONE root div

      <div>

          <GreeterMessage name={name} message={message}/>
          //parent handles event from child. name function
          //call it on child with "on" and prop name
          <GreeterForm onNewSubmit={this.handleNewSubmit}/>

      </div>
    );
  }
});

module.exports = Greeter;
