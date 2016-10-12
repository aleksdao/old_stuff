const React = require('react');
const ReactDOM = require('react-dom');
let GreeterMessage = require('GreeterMessage');

//container components. maintain state and render children
var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    //we don't want browser to reset
    e.preventDefault();
    var nameRef = this.refs.name;
    var name = nameRef.value;
    var messageRef = this.refs.message;
    var message = messageRef.value;
    var updates = {};

    if (name.length > 0) { {
      updates.name = name;
      this.refs.name.value = '';

    }

    if (message.length > 0) {
      this.refs.message.value = '';
      updates.message = message;
    }


    this.props.onNewSubmit(updates);


    }
  },

  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name" placeholder="Enter name"/>
        <textarea ref="message" placeholder="Enter message"/>
        <button>Set name!</button>
      </form>
    )
  }
})

module.exports = GreeterForm;
