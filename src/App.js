import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

export default function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path="/">
            hello there
          </Route>
          <Route exact path=""> 

          </Route>
        </Switch>
      </div>
    </Router>
  );
}