import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  isSticky?: boolean;
}

const navbarHeight = 60;

export const Container = styled.nav<ContainerProps>`
  width: 100%;
  height: ${navbarHeight}px;
  background-color: #1d1930;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  box-shadow: 0 2px 15px ${shade(0.5, '#171328')};
  z-index: 2;

  ${({ isSticky }) =>
    isSticky &&
    css`
      position: fixed;
      top: 0;

      // to ensure the content beneath does not move up when the navbar
      // is out of page flow (position: fixed)
      & + * {
        padding-top: ${navbarHeight}px;
      }
    `}

  .hamburger span {
    display: block;
    width: 30px;
    height: 2px;
    background-color: #c4c4c4;

    & + span {
      margin-top: 5px;
    }
  }
`;
