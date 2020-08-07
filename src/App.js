import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './style/main.scss'
import { Provider } from './context/context';


const App = () => {

  return (
    <Provider>
      <Router>
        <Switch>

        </Switch>
      </Router>
    </Provider>
  );
}

export default App; 