import React from 'react';
import SideOne from '../SideOne/SideOne';
import SideTwo from '../SideTwo/SideTwo';
import MainPage from '../MainPage/MainPage';
import './App.css';

function App() {
  return (
    <div className="App">
    <div className="app-div">
       <SideOne />
       <SideTwo />
       <MainPage />
    </div>
      
    </div>
  );
}

export default App;
