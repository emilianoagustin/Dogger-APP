import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Landing}/>
        <div>
          <NavBar/>
          <Route exact path='/dogs' component={Home}/>
          <Route path='/dogs/:id' component={Detail}/>
          <Route exact path='/dog' component={Form}/>
        </div>
      </Switch>
    </div>
  );
}

export default App;
