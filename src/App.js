import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './style/main.scss'
import { Provider } from './context/context';
import { SignUp } from './pages/signUp';


const App = () => {

  return (
    <Router>
      <Switch>
        <Route path="/signUp">
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
}

export default App; 