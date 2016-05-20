import React from 'react';
import ReactDOM from 'react-dom';

import * as firebase from 'firebase';






let root;

var Home = React.createClass({
  getInitialState: function() {
    return {count: 0};
  },

  onClick: function() {
    root.child('huh').push('ass').then(() => {
      this.setState({count: this.state.count + 1});
    });
  },

  render: function() {
    return (
      <div>
        <h1>Welcome to my lifting helper!</h1>
        <div>Pick a workout</div>
        <input type='button' value='shit!' onClick={this.onClick} />
        <div>{this.state.count}</div>
      </div>
    );
  },
});

function init() {
  // Initialize Firebase
  var config = {
    authDomain: "lift-669c1.firebaseapp.com",
    databaseURL: "https://lift-669c1.firebaseio.com",
    storageBucket: "lift-669c1.appspot.com",
  };
  firebase.initializeApp(config);

  root = firebase.database().ref();

  window.addEventListener('load', function() {
    ReactDOM.render(
      React.createElement(Home, {}),
      document.getElementById('root')
    );
  });
}


init();
