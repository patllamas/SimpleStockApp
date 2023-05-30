import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import RightPanel from './Components/RightPanel';
import StockDashboard from './Components/StockDashboard';

function App() {
  const [currentStock, setCurrentStock] = useState("APPL");
  return (
    <div className="App">
      <Header />
      <StockDashboard currentStock={currentStock} />
      <RightPanel currentStock={currentStock} setCurrentStock={setCurrentStock} />
    </div>
  );
}

export default App;
