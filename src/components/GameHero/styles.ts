import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding-top: 40px; // move the main content down
  max-width: 800px;

  .header {
    /* height: 250px; */
    display: flex;
    align-items: flex-end;

    img {
      width: 120px;
      object-fit: contain;
      border-radius: 14px;
    }

    .info {
      margin-left: 14px;

      h1 {
        font-size: 1.8rem;
        margin-bottom: 8px;
      }

      div {
        display: flex;
        align-items: center;

        span {
          margin-left: 4px;
        }
      }

      span {
        font-size: 1rem;
        color: #c4c4c4;
      }

      > span {
        display: block;
      }
    }
  }
`;
