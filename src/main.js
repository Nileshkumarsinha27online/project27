import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import { Router, Route, Link, browserHistory,IndexRoute} from 'react-router';
import NavMenu from './components/NavBar';
import HomeData from './components/HomeTab';
import ImageWithText from './components/ImageWithText';
import './components/Navbar/styles.scss';

render(

<div className='bodyBackground'>
	
	<NavMenu />
	<ImageWithText />
	<HomeData />
</div>

	,document.getElementById('container')
	);