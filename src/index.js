import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from 'react-router-dom';

const application = (

    <BrowserRouter>
        <App/>
    </BrowserRouter>
)

ReactDOM.render(
    <React.StrictMode>
        {application}
    </React.StrictMode>,
    document.getElementById('root')
);
