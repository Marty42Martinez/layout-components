import React from 'react';
import { render } from 'react-dom';
import App from './components/app';

const element = <h1>React!!</h1>;

render(
  <App />,
  document.getElementById('root')
);
