import styled from 'styled-components';

const contentPadding = 16;

export const Container = styled.div`
  padding: 0 ${contentPadding}px;

  .divider {
    width: 100%;
    height: 1px;
    background-color: #2e2e2e;
    margin: 20px 0;
  }

  .about p {
    font-size: 1.3rem;
    color: #c4c4c4;
    text-align: justify;
    line-height: 1.5;
  }
`;

export const Cover = styled.div`
  width: 100%;
  overflow: hidden;
  height: 130px;
  display: flex;
  position: absolute;
  margin: 0 ${-contentPadding}px; // to counterbalance the padding of the content

  img {
    width: 100%;
    display: block;
    object-fit: cover;
    filter: blur(5px);
    -webkit-filter: blur(5px);
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0) 85%
    );
    z-index: -1; // prevent any image on top to receive the linear gradient
  }
`;
