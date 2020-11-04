import { React } from 'react';
import { ReactDOM } from 'react-dom';

// var ReactDOM = require('react-dom')
// var React = require('react')
import { App } from "../client/app.jsx";
// var HelloWorld = require('../client/app.jsx')

var app = document.getElementById("app");
ReactDOM.render(<App />, app);

