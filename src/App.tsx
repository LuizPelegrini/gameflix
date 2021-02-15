import React from 'react';
import GlobalStyle from './styles/global';

import Home from './pages/Home';
// import Details from './pages/Details';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Home />
      <GlobalStyle />
    </>
  );
};

export default App;
