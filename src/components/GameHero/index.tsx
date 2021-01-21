/**
 * Component to render the very top information about a game
 */

import React from 'react';
import { FiCheckCircle, FiHeart } from 'react-icons/fi';

import { Container } from './styles';

const GameHero: React.FC = () => (
  <Container>
    <div className="header">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/51alc9I4VjL._SX377_BO1,204,203,200_.jpg"
        alt="Game poster"
      />
      <div className="info">
        <h1>Assassin&apos;s Creed Black Flag</h1>
        <div>
          <FiCheckCircle size={10} />
          <span>Released</span>
        </div>
        <span>Release Date: 29/02/2015</span>
      </div>
      <FiHeart size={40} fill="#6931E1" color="#6931E1" />
    </div>
  </Container>
);

export default GameHero;
