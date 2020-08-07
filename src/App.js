import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './style/main.scss'
import { Provider } from './context/context';
import { SignUp } from './pages/signUp';
import HomeDefault from './pages/home-default'


const App = () => {

  return (
    <Provider>
      <Router>
        <Switch>
          <Route to='/home-default'>
            <HomeDefault />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;


