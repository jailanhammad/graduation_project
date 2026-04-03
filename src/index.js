import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RoutingApp from './RoutingApp';
import Preloader from './components/preloader'; // 1. Import the Preloader
import FloatingContact from './components/floatingcontact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Preloader />      {/* 3. Preloader goes here */}
    <RoutingApp />     {/* This is your main website content */}
    <FloatingContact />
  </React.StrictMode>
);

