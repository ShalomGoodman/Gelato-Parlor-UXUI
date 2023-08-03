import React, { useContext } from 'react';
import './App.css';

import Footer from '../src/components/footer'
import Header from './components/header/header';
import FullCard from './components/cards/full-card';
import TableCellCard from './components/cards/table-cell-card';
import { ThemeProvider, ThemeContext } from './context/themeContext';
import FlavorCarousel from './components/cards/flavors-carousel';
// import SplitCard from './components/cards/split-card';
import SplitCardContainer from './components/cards/splitCardContainer';
import BigImageCarousel from './components/big-image-carousel/big-image';

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <header className="App-header">
        <Header />
        <BigImageCarousel />
      </header>
      <div className="App-body">
        <FlavorCarousel />
        <FullCard />
      </div>
      <TableCellCard />
      <SplitCardContainer />
      <div className="App-footer">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
