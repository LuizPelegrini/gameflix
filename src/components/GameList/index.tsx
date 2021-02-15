import React, { useMemo } from 'react';
import Slider, { ResponsiveObject } from 'react-slick';

import { Container, Item } from './styles';
import { size } from '../../styles/global';

interface GameListProps {
  title: string;
  games: Game[];
}

interface Game {
  cover: {
    id: string;
    url: string;
  };
}

const GameList: React.FC<GameListProps> = ({ title, games }: GameListProps) => {
  // creating the breakpoints for Slick Slider
  const sizes = useMemo<ResponsiveObject[]>(() => {
    const temp: ResponsiveObject[] = [];
    temp.push(
      {
        breakpoint: size.lg,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: size.md,
        settings: {
          slidesToShow: 3,
        },
      },
    );
    return temp;
  }, []);

  return (
    <Container>
      <h5>{title}</h5>
      <Slider slidesToShow={7} arrows={false} responsive={sizes} draggable>
        {games.map(game => (
          <Item key={game.cover.id}>
            <img src={game.cover.url} alt="" />
          </Item>
        ))}
      </Slider>
    </Container>
  );
};

export default GameList;
