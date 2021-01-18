import React from 'react';

import { Container } from './styles';
import useSticky from '../../hooks/useSticky';

const Navbar: React.FC = () => {
  const { elementRef: navbarRef, isSticky } = useSticky<HTMLDivElement>();

  return <Container isSticky={isSticky} ref={navbarRef} />;
};

export default Navbar;
