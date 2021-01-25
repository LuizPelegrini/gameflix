import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  h6 {
    flex: 1;
    font-weight: 300;
    font-size: 1.3rem;
    color: #c4c4c4;
  }

  div {
    display: flex;
  }

  span {
    font-size: 1.2rem;
    margin-left: 8px;
  }

  & + div {
    margin-top: 8px;
  }
`;

export const ScoreSlot = styled.div`
  width: 25px;
  height: 6px;
  background: #c4c4c4;

  & + div {
    margin-left: 6px;
  }

  &:first-child {
    border-radius: 10px 0 0 10px;
  }

  &:last-child {
    border-radius: 0 10px 10px 0;
  }
`;
