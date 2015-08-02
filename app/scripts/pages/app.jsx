import React from 'react';
import { RouteHandler } from 'react-router';
import Header from '../components/header.jsx'
import Search from '../components/search.jsx'

class App extends React.Component {
  
  render() {
    return (
      <div>
        <Header />
        <Search />
        <div className="content">
          <RouteHandler/>
        </div>
      </div>
    );
  }
  
}

export default App;
