import React from 'react';
// import './App.css';
import Author from './components/Authors';
import UpdateAuthor from './components/UpdateAuthor';
import AuthorForm from './components/AuthorForm';
import {Router} from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router>
        <Author path="/"/>
        <AuthorForm path="/authors/new"/>
        <UpdateAuthor path="/authors/:id/update"/>
      </Router>
    </div>
  );
}
export default App;
