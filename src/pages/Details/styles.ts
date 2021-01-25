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

  #platforms-developer {
    display: flex;
    flex-direction: column;
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

export const CriticsReview = styled.section`
  padding: 16px;
  background: #1d192e;
  border-radius: 20px;

  h4 {
    margin-bottom: 14px;
  }
`;

export const Platforms = styled.div`
  padding: 16px;
  background: #1d192e;
  border-radius: 20px;
  flex: 1;

  h5 {
    margin-bottom: 14px;
  }

  div {
    display: inline-flex;
    flex-wrap: wrap;
    margin-left: -12px;
    width: calc(100% + 12px);
    justify-content: space-around;

    // platform logos
    img {
      width: 70px;
      height: 30px;
      object-fit: cover;
      margin-left: 12px;
    }
  }
`;

export const Developer = styled.div`
  padding: 16px;
  background: #1d192e;
  border-radius: 20px;
  margin-top: 10px;
  height: 100px;
  display: flex;
  justify-content: space-around;

  h5 {
    margin-bottom: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    // publisher/developer logos
    img {
      width: 50px;
      height: 50px;
      object-fit: contain;
      text-align: center;
    }
  }
`;
