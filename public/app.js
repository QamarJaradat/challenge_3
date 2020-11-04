import React from 'react';
import ReactDOM from 'react-dom';

// var ReactDOM = require('react-dom')
// var React = require('react')
import HelloWorld from "../client/app.jsx";
// var HelloWorld = require('../client/app.jsx')

var app = document.getElementById("app");
ReactDOM.render(<HelloWorld />, app);

