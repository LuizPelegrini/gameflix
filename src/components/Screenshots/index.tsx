/**
 * Component to render the screenshots of the game
 */

import React from 'react';
import Slider, { CustomArrowProps } from 'react-slick';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Container } from './styles';

const NextArrow: React.FC<CustomArrowProps> = ({
  onClick,
}: CustomArrowProps) => (
  <button type="button" onClick={onClick} className="slide-next">
    <FiChevronRight size={25} />
  </button>
);

const PreviousArrow: React.FC<CustomArrowProps> = ({
  onClick,
}: CustomArrowProps) => (
  <button type="button" onClick={onClick} className="slide-prev">
    <FiChevronLeft size={25} />
  </button>
);

const Screenshots: React.FC = () => {
  return (
    <Container>
      <h4>Screenshots</h4>
      <Slider prevArrow={<PreviousArrow />} nextArrow={<NextArrow />}>
        <img
          src="https://cdn.cloudflare.steamstatic.com/steam/apps/260471/ss_a7b90773770ff884387199491885c12a57bdfc5d.1920x1080.jpg?t=1455812884img"
          alt="img1"
        />
        <img
          src="https://cdn.cloudflare.steamstatic.com/steam/apps/260471/ss_a7b90773770ff884387199491885c12a57bdfc5d.1920x1080.jpg?t=1455812884img"
          alt="img2"
        />
        <img
          src="https://i.pinimg.com/originals/35/12/e7/3512e73aa9a52be912b3fd790dfcb79c.jpg"
          alt="img3"
        />
        <img
          src="https://cdn.cloudflare.steamstatic.com/steam/apps/260471/ss_a7b90773770ff884387199491885c12a57bdfc5d.1920x1080.jpg?t=1455812884img"
          alt="img4"
        />
      </Slider>
    </Container>
  );
};

export default Screenshots;
