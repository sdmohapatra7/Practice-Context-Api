// import ParentComponent from './components/ParentComponent';
import './App.css';
import { useState } from 'react';
import Items from './components/Items';
import Navbar from './components/Navbar';
import { TotalContext } from './ContextApi/TotalContext';
import { ItemContext } from './ContextApi/ItemContext';

function App() {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  return (
    <TotalContext.Provider value={{ total, setTotal }}>
      <ItemContext.Provider value={{ item, setItem }}>
        <div className="App">
          {/* <ParentComponent /> */}
          <h2>Shopping Cart</h2>
          <Navbar />
          <Items />
        </div>
      </ItemContext.Provider>
    </TotalContext.Provider>
  );
}

export default App;
