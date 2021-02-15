import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from '../../styles/global';

export const Container = styled.div`
  margin-top: 16px;

  h5 {
    margin-bottom: 8px;
    text-transform: uppercase;
  }

  ul {
    /* display: flex; */
    list-style: none;
    white-space: nowrap; // to prevent list to wrap
    overflow-x: scroll;
  }

  .slick-list {
    margin: 0 -8px; // to counter the padding of slick-slide
  }
  .slick-slide {
    padding: 0 8px; // to insert space between slides
  }

  @media ${device.md} {
    h5 {
      font-size: 2rem;
    }

    .slick-list {
      margin: 0 -10px; // to counter the padding of slick-slide
    }
    .slick-slide {
      padding: 0 10px; // to insert space between slides
    }
  }

  @media ${device.lg} {
    h5 {
      font-size: 2.5rem;
    }
  }
`;

export const Item = styled(Link)`
  display: inline-block;
  width: 100px;
  height: 130px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }

  @media ${device.md} {
    height: 200px;
  }

  @media ${device.md} {
    height: 250px;
  }

  /* @media ${device.lg} {
    height: 220px;
  } */
`;
