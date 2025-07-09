import React from "react";
import ReactDOM from 'react-dom/client'
//import   { HelloWorldApp }  from "./HelloWorldtApp";
import { FirstdApp } from "./FirstApp";
import { CounterApp } from "./counterApp";
import './styles.css';

ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={11} />
        
    </React.StrictMode>
)