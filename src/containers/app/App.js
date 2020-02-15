import React from 'react';
import Header from '../header';
import Footer from '../footer';
import Content from '../content';
import { Container, BreadcrumbCustom } from './styled';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Container>
        <BreadcrumbCustom>
          <BreadcrumbCustom.Item>Home</BreadcrumbCustom.Item>
        </BreadcrumbCustom>
        <Content />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
