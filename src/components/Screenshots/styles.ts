import styled from 'styled-components';

export const Container = styled.div`
  img {
    object-fit: cover;
    height: 200px;
    border-radius: 20px;
    display: block !important;
  }

  button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: #fff;
    height: 100%;

    &.slide-next {
      right: 0;
    }

    &.slide-prev {
      left: 0;
      z-index: 1; // for some reason, the left arrow is below the carousel
    }
  }

  .slick-slider {
    margin-top: 12px;
  }

  .slick-list {
    margin: 0 -10px; // to counter the padding of slick-slide
    border-radius: 20px;
  }

  .slick-slide {
    padding: 0 10px; // to insert space between slides
  }
`;
