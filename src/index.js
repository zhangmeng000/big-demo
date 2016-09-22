import React from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import Routes from './Routes.js';
import 'highlight.js/styles/github.css';
import './post.css';

render(<Routes />,document.getElementById('root'));
