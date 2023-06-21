// import ParentComponent from './components/ParentComponent';
import './App.css';
// import { useState } from 'react';
import Items from './components/Items';
import Navbar from './components/Navbar';
// import { TotalContext } from './ContextApi/TotalContext';
// import { ItemContext } from './ContextApi/ItemContext';
import CustomItemContext from './ContextApi/ItemContext';

function App() {
  return (
      <CustomItemContext>
        <div className="App">
          {/* <ParentComponent /> */}
          <h2>Shopping Cart</h2>
          <Navbar />
          <Items />
        </div>
      </CustomItemContext>
  );
}

export default App;
