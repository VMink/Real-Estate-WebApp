import React, { useState } from 'react'
import Navbar from './components/navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Hero from './components/Hero';
import Sidebar from './components/sidebar';

function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Router>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Hero/>
    </Router>
  );
}

export default App;
