import React from 'react';
import './App.css';
import HeaderHomePage from './Components/HeaderHomePage/HeaderHomePage';
import ServicesTab from './Components/ServicesTab/ServicesTab';


function App() {
  return (
    <div className="App">
      <HeaderHomePage></HeaderHomePage>
      <ServicesTab></ServicesTab>
    </div>
  );
}

export default App;
