import React, { useMemo, useState, useCallback } from 'react';
import Slider, { ResponsiveObject } from 'react-slick';
import { useHistory } from 'react-router-dom';

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
  const history = useHistory();
  const [mouseMove, setMouseMove] = useState(false);

  // this is to avoid dragging the slider and performing the click
  // the app will forward the user to Details pagee only if he doesnt drag
  const handleClick = useCallback(() => {
    if (!mouseMove) history.push('details');
  }, [history, mouseMove]);

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
          <Item
            to="" // routing is made in the handleClick function
            key={game.cover.id}
            onMouseDown={() => setMouseMove(false)}
            onTouchStart={() => setMouseMove(false)}
            onMouseMove={() => setMouseMove(true)}
            onTouchMove={() => setMouseMove(true)}
            onMouseUp={() => handleClick()}
            onTouchEnd={() => handleClick()}
          >
            <img src={game.cover.url} alt="" />
          </Item>
        ))}
      </Slider>
    </Container>
  );
};

export default GameList;
