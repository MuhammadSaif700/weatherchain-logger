import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import './styles/main.css';

const rootElement = document.getElementById('root');

if (rootElement) {
    ReactDOM.render(<Home />, rootElement);
}