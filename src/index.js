import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import './index.scss';
import './styles/LCARS.css'
import App from './app/router';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App/>);
