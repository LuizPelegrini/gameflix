import React from 'react';
import { Container, ScoreSlot } from './styles';

const Review: React.FC = () => (
  <Container>
    <h6>GameInformer</h6>
    <div>
      <ScoreSlot />
      <ScoreSlot />
      <ScoreSlot />
      <ScoreSlot />
      <ScoreSlot />
    </div>
    <span>75</span>
  </Container>
);

export default Review;
