import './App.css';

import GMap from './containers/GMap';
import Header from './containers/Header';
import React from 'react';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <GMap />
    </div>
  );
}

export default App;
