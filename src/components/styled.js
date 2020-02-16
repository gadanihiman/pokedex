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
  margin-top: 20px;
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

export const PokemonCardDetail = styled(Card)`
  width: 300;
  margin-top: 16;
`;

export const AvatarPokemon = styled.img`
  width: 200px;
  height: 200px;
  margin: auto;
`;

export const Section = styled.div`
  margin-top: 10px;
`;