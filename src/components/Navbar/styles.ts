import styled, { css } from 'styled-components';

interface ContainerProps {
  isSticky?: boolean;
}

const navbarHeight = 150;

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: ${navbarHeight}px;
  background-color: #c53030;

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
`;
