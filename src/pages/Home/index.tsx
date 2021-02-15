import React, { useEffect, useState } from 'react';
import GameList from '../../components/GameList';
import api from '../../services/api';

import { Container } from './styles';

interface GamesList {
  name: string;
  result: Game[];
}

interface Game {
  cover: {
    id: string;
    url: string;
  };
}

const Home: React.FC = () => {
  const [gamesList, setGamesList] = useState<GamesList[]>([]);

  // Fetching 5 game lists when component is mounted
  useEffect(() => {
    const fetchGameLists = async () => {
      const response = await api.get('games');
      setGamesList(response.data);
    };

    fetchGameLists();
  }, []);

  return (
    <Container>
      {gamesList.map(item => (
        <GameList key={item.name} title={item.name} games={item.result} />
      ))}
    </Container>
  );
};

export default Home;
