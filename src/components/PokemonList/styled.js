import styled from 'styled-components';
import { Card } from 'antd';

export const CustomCard = styled(Card)`
  margin: 16px;
  /* Large devices */
  @media (min-width: 576px) {
    width: 300px;
  }
`;

export const CardTitle = styled.h3`
  margin: 20px;
`;

export const PaginationWrapper = styled.div`
  justify-content: space-between;
  display: flex;
`;

export const PokemonListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const PokemonContainer = styled.div`
  /* width: 900px; */
  margin: auto;
`;

export const Sprite = styled.img`
  width: 5em;
  height: 5em;
  /* display: none; */
`;

export const PokemonCardWrapper = styled.div`
  width: 100%;
  /* Large devices */
  @media (min-width: 576px) {
    width: unset;
  }
`;
