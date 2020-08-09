import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

import 'normalize.css';
import './index.scss';

ReactDOM.render(
  <App endpoint="Properties" />,
  document.getElementById('root'),
);
