import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';


function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Landing}/>
      <Route exact path='/dogs' component={Home}/>
      <Route path='/dogs/:id' component={Detail}/>
      <Route exact path='/dog' component={Form}/>
    </div>
  );
}

export default App;
