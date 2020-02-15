import React from 'react';
import { Layout } from 'antd';

const { Footer: DefaultFooter } = Layout;

const Footer = () => {
  return (
    <DefaultFooter style={{ textAlign: 'center' }}>Pokemon Deck App with PokeApi</DefaultFooter>
  );
}

export default Footer;