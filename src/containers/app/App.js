import React from 'react';
import Header from '../header';
import Footer from '../footer';
import Content from '../content';
import { Layout, Breadcrumb } from 'antd';

const { Content: Container } = Layout;

const App = () => {
  return (
    <div className="App">
      <Header />
      <Container style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        <Content />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
