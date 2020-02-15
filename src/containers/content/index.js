import React from 'react';
import { ContentWrapper } from './styled';
import PokemonList from '../../components/PokemonList';

const Content = () => {
  return (
    <ContentWrapper>
      <PokemonList />
    </ContentWrapper>
  );
}

export default Content;
