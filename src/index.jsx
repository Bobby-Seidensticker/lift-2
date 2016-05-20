import React from 'react';
import ReactDOM from 'react-dom';


var Home = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Welcome to my lifting helper!</h1>
        <div>Pick a workout</div>
      </div>
    );
  },
});

function init() {
  let root = document.getElementById('root');

  window.addEventListener('load', function() {
    ReactDOM.render(
      React.createElement(Home, {}),
      root
    );
  });
}


init();
