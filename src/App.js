import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import MagicDetail from './MagicDetail';
import MagicPage from './MagicPage';

export default function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path="/">
            <MagicPage />
          </Route>
          <Route exact path="/magic/:id"> 
            <MagicDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}