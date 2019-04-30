import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import logo from './logo.png';
import './App.css';
import Launches from './components/Launches';
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});
function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <img
          src={logo}
          alt="Space"
          style={{ width: 300, display: 'block', margin: 'auto' }}
        />
        <Launches/>
      </div>
    </ApolloProvider>
  );
}

export default App;
