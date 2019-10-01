import React from 'react';
import './App.scss';

import TodoContainer from './Components/TodoContainer/TodoContainer';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <TodoContainer />
    </div>
  );
}

export default App;
