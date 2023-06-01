import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { BlogPost } from './pages/BlogPost';
import { BlogList } from './pages/BlogList';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/BlogPost" component={BlogPost} />
        <Route path="/BlogList" component={BlogList} />
      </Switch>
    </Router>
  );
}

export default App;

