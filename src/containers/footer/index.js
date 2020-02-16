import React from 'react';
import { Layout } from 'antd';

const { Footer: DefaultFooter } = Layout;

const Footer = () => {
  return (
    <DefaultFooter
      style={{ textAlign: 'center' }}>
        Pokemon Deck App created by
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/gadanihiman"
        > Gadani Himan Gurusinga
        </a> with
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://pokeapi.co/"
        > PokeApi</a>
      </DefaultFooter>
  );
}

export default Footer;