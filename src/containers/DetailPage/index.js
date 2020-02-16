import React from 'react';
import { ContentWrapper } from './styled';
import PokemonDetail from '../../components/PokemonDetail';
import { BreadcrumbCustom } from '../app/styled';

const DetailPage = () => {
  return (
    <>
      <BreadcrumbCustom>
        <BreadcrumbCustom.Item>Home</BreadcrumbCustom.Item>
        <BreadcrumbCustom.Item>Pokemon Detail</BreadcrumbCustom.Item>
      </BreadcrumbCustom>
      <ContentWrapper>
        <PokemonDetail />
      </ContentWrapper>
    </>
  );
}

export default DetailPage;
