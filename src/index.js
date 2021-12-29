import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { TabMenuProvider } from './Context/TabMenuContext';
ReactDOM.render(
  <React.StrictMode>
    <TabMenuProvider>
      <App />
    </TabMenuProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
