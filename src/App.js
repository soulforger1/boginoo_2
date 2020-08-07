import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './style/main.scss'
import { Provider } from './context/context';
import HomeDefault from './pages/home-default'


const App = () => {

  return (
    <Router>
      <Switch>
        <Route to='/home-default'>
          <HomeDefault/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;


