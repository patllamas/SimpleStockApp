import { useState } from 'react';
import './App.css';
import RightPanel from './Components/RightPanel';
import StockDashboard from './Components/StockDashboard';
import HeaderBar from './Components/HeaderBar';

function App() {
  const [currentStock, setCurrentStock] = useState("APPL");
  return (
    <div className="App">
      <HeaderBar />
      <StockDashboard currentStock={currentStock} />
      <RightPanel currentStock={currentStock} setCurrentStock={setCurrentStock} />
    </div>
  );
}

export default App;
