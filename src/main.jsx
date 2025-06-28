import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '@fancyapps/ui/dist/fancybox/fancybox.css';


import 'aos/dist/aos.css';
import '../src/assets/css/header.css';
import '../src/assets/css/main.css';
import '../src/assets/js/custom.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
