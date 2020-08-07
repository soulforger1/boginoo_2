import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './style/main.scss'
import { Provider } from './context/context';
<<<<<<< HEAD
import { SignUp } from './pages/signUp';
=======
import HomeDefault from './pages/home-default'
>>>>>>> 7676ee91285c706a8555d93563afc5aed0bc31f2


const App = () => {

  return (
    <Router>
      <Switch>
<<<<<<< HEAD
        <Route path="/signUp">
          <SignUp />
=======
        <Route to='/home-default'>
          <HomeDefault/>
>>>>>>> 7676ee91285c706a8555d93563afc5aed0bc31f2
        </Route>
      </Switch>
    </Router>
  );
}

export default App;


