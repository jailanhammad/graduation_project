import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RoutingApp from './RoutingApp';
import Preloader from './components/preloader'; 
import FloatingContact from './components/floatingcontact';

import MusicPlayer from './components/musicplayer';
import { LanguageProvider } from './LanguageContext';
import classicMusic from './assets/Satie Gnossiennes No. 1 - Lent - Lang Lang.mp3';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <Preloader />
      <MusicPlayer musicSrc={classicMusic} />
      <RoutingApp />
      <FloatingContact />
    </LanguageProvider>
  </React.StrictMode>
);

