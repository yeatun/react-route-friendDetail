import './App.css';
import { useEffect, useState } from 'react/cjs/react.development';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import FriendDetail from './components/FriendDetail/FriendDetail';

function App() {
 

  return (
    <div className="App">
      <Router >
        <Switch>
          <Route path="/Home"><Home></Home>
          </Route>
          <Route path ="/friend/:friendId">
            <FriendDetail></FriendDetail>
          </Route>
          <Route exact path ="/">
            <Home/>
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
       
      
    </div>
  );
}

export default App;
