import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Launches from './components/Launches.js';
import Launch from './components/Launch.js';
import './App.css';
import logo from './logo.png';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

class App extends Component {
  render() {
  return (
      <ApolloProvider client={client}>
      <Router>
      <div className="container">
      <img src={logo} alt="spacex" style={{ width:200, display: 'block', margin: 'auto', padding: '50px' }}/>
      <Launches />
      <Route exact path="/" component={Launches} />
      <Route exact path="/launch/:flight_number" component={Launch} />
      </div>
      </Router>
      </ApolloProvider>
  );
}
}

export default App;
