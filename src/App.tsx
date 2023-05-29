import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import RightPanel from './Components/RightPanel';
import StockDashboard from './Components/StockDashboard';

function App() {
  return (
    <div className="App">
      <Header />
      <StockDashboard />
      <RightPanel />
    </div>
  );
}

export default App;
