import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';

class HelloApp{
  helloStr: string = '';
}

function App() {
  let helloClass = new HelloApp();
  helloClass.helloStr = 'Hi, I\'m Vlados!';
  return (
    <div className="App">
      <Navbar/>
    </div>
  );
}

export default App;
