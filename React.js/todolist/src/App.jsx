import React from 'react';
import './App.scss';
import Pagelist from './components/Pagelist';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="flex-header content-main container-fluid">
          <Pagelist />
      </main>
    </div>
  )
}

export default App;
