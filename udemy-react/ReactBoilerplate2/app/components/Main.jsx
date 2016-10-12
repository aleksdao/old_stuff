const React = require('react');

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <div>
          <div>
            <p>Main.jsx Rendered</p>
            {this.props.children}
          </div>
        </div>

      </div>

    )
  }
})

module.exports = Main;
