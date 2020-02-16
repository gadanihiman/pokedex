import React, { useEffect, useState } from 'react'
import { isEmpty } from 'lodash';
import { useParams } from "react-router-dom";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { objectOf, bool, any, func } from 'prop-types';
import {
  Progress,
  Skeleton,
  Card,
  Icon,
  Tag,
  Badge,
  Button,
} from 'antd';

import { pokemonState } from '../../redux/Pokemon/selectors';
import { getPokemonDetail } from '../../redux/Pokemon/action';
import { PokemonCardDetail, AvatarPokemon, Section } from '../styled';
import { capitalizeFirstLetter } from '../../lib/helper';
import { TYPE_COLORS } from '../../lib/constant';

const { Meta } = Card;

const PokemonDescription = ({
  id,
  types,
  moves,
  stats,
  themeColor,
  weight,
  height,
  abilities,
  species,
}) => {
  const [showFullMoves, setShowFullMoves] = useState(false);
  const filteredMoves = !showFullMoves
    ? !isEmpty(moves) && moves.length > 10 && moves.slice(0, 10)
    : moves;

  const catchPokemon = (evt, id) => {
    evt.preventDefault();
    console.log('id', id)
  };

  // TODO: need to seperate this component per each section
  return (
    <div>
      <Button
        type="primary"
        onClick={e => catchPokemon(e, id)}
      >
          Catch this Pokemon!
      </Button>
      <Section style={{ marginTop: 25 }}>
        <h3> Profile </h3>
        <h4>
          Species: <strong>{capitalizeFirstLetter(species.name)}</strong>
        </h4>
        <h4>
          Weight: <strong>{weight}</strong> Hectogram
        </h4>
        <h4>
          Height: <strong>{height}</strong> Decigram
        </h4>
      </Section>
      <Section>
        <h3> Abilities </h3>
        <span>
          {abilities.map(({ ability }) => (
            <Tag key={ability.name} color={themeColor}>
              {capitalizeFirstLetter(ability.name)}
            </Tag>
          ))}
        </span>
      </Section>
      <Section>
        <h3>Types</h3>
        <span>
          {types.map(({ type }) => {
            return (
              <Tag key={type.name} color={`#${TYPE_COLORS[type.name]}`}>
                {capitalizeFirstLetter(type.name)}
              </Tag>
            );
          })}
        </span>
      </Section>
      <Section>
        <h3>Stats</h3>
        {stats.map(({ base_stat, stat: { name }, effort }) => {
          return (
            <div key={name}>
              <span>{capitalizeFirstLetter(name)}</span>
              <Progress
                strokeColor={themeColor}
                percent={base_stat}
                status={!!effort ? 'active' : 'normal'}
              />
            </div>
          );
        })}
      </Section>
      <Section>
        <h3>Moves</h3>
        <span>
          {!isEmpty(filteredMoves) && filteredMoves.map(({ move }) => (
            <Tag key={move.name} color="#4f4242">
              {capitalizeFirstLetter(move.name)}
            </Tag>
          ))}
        </span>
        {showFullMoves ? (
          <small
            style={{ color: '#8c7575', cursor: 'pointer' }}
            onClick={() => setShowFullMoves(false)}
          >
            Show few moves...
          </small>
        ) : (
          <small
            style={{ color: '#8c7575', cursor: 'pointer' }}
            onClick={() => setShowFullMoves(true)}
          >
            Show more moves...
          </small>
        )}
      </Section>
    </div>
  );
};

const PokemonDetail = ({
  setPokemonList,
  isLoading,
  pokemonDetail: {
    name,
    base_experience,
    sprites: {
      front_default,
    },
    types,
    moves,
    stats,
    height,
    weight,
    abilities,
    species,
  }
}) => {
  let { id } = useParams();
  const cardTitle = `Pokemon ${capitalizeFirstLetter(name)}`;
  const typeName = types.map(type => type.type.name);
  const themeColor = `#${TYPE_COLORS[typeName[typeName.length - 1]]}`;

  useEffect(() => {
    setPokemonList(id);
    // return () => {
    //   cleanup
    // };
  }, [setPokemonList, id]);

  return (
    <div>
      <PokemonCardDetail
        cover={
          isLoading ? (
            <Icon type="loading" />
          ) : (
            <AvatarPokemon
              alt={`Pokemon ${name}`}
              src={front_default}
            />
          )
        }
        title={
          <span>
            <span>
              <h3>{cardTitle}</h3>
              <small>Experience</small>
              <Badge
                style={{ backgroundColor: themeColor, marginLeft: 10 }}
                count={base_experience}
              />
            </span>
          </span>
        }
        headStyle={{ borderColor: themeColor }}
        actions={[
          <Icon type="user-add" />,
        ]}
      >
        <Skeleton loading={isLoading} avatar active>
          <Meta
            title={<h2>{capitalizeFirstLetter(name)}</h2>}
            description={
              <PokemonDescription
                id={id}
                weight={weight}
                height={height}
                abilities={abilities}
                species={species}
                themeColor={themeColor}
                types={types}
                moves={moves}
                stats={stats}
              />
            }
          />
        </Skeleton>
      </PokemonCardDetail>
    </div>
  )
}

export const mapStateToProps = createStructuredSelector({
  isLoading: pokemonState('loadingDetail'),
  pokemonDetail: pokemonState('pokemonDetail'),
});

const mapDispatchToProps = {
  setPokemonList: getPokemonDetail,
};

PokemonDetail.propTypes = {
  isLoading: bool.isRequired,
  pokemonDetail: objectOf(any).isRequired,
  setPokemonList: func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PokemonDetail);
