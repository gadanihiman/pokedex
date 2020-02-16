import React from 'react';
import Header from '../header';
import Footer from '../footer';
import Routes from '../../routes';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { Container } from './styled';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Container>
          <Routes />
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
