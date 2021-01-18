import React from 'react';
import GlobalStyle from './styles/global';
import Details from './pages/Details';
import Navbar from './components/Navbar';

const App: React.FC = () => (
  <>
    <Navbar />
    <Details />
    <GlobalStyle />
  </>
);

export default App;
