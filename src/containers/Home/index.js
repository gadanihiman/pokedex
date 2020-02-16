import React from 'react';
import { ContentWrapper } from './styled';
import PokemonList from '../../components/PokemonList';
import { BreadcrumbCustom } from '../app/styled';

const Home = () => {
  return (
    <>
      <BreadcrumbCustom>
        <BreadcrumbCustom.Item>Home</BreadcrumbCustom.Item>
      </BreadcrumbCustom>
      <ContentWrapper>
        <PokemonList />
      </ContentWrapper>
    </>
  );
}

export default Home;
