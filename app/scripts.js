'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

const app = document.querySelector("#app");

/**
 * Components
 */

import Timer from './components/timer';
import Keyboard from './components/keyboard';

function App() {
  return (
    <div>
      <Timer />
      <Keyboard />
    </div>
  );
}

ReactDOM.render(
  <App />,
  app
);