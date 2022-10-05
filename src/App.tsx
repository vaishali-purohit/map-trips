import './App.css';

import GMap from './containers/GMap';
import Header from './containers/Header';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const App = () => {
  return (
    <div className='App'>
      <Header />
      <GMap />
    </div>
  );
}

export default App;
