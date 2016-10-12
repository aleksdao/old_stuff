var React = require('react');
var Todo = require('Todo');

import { connect } from 'react-redux';

var TodoList = React.createClass({
  render: function () {
    var {todos} = this.props;
    var renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing To Do</p>
        );
      }

      return todos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo}/>
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

function mapStateToProps (state) {
  return {
    todos: state.todos
  }
}

module.exports = connect(mapStateToProps)(TodoList);
