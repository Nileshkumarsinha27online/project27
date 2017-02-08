import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import { Router, Route, Link, browserHistory,IndexRoute} from 'react-router';
import NavMenu from './components/NavBar';


render(


	<NavMenu />

	,document.getElementById('container')
	);