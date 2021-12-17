import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import NavBar from './shared/NavBar/NavBar';
import './App.css';
import Home from './components/Home/Home';
import Schedule from './components/Schedule/Schedule';
import Contact from './components/Contacts/Contact';
import * as ROUTE_CONSTANTS from "./Constants/routes";
import ScrollToTop from './shared/ScrollToTop/scrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <NavBar />
        <Route exact path={ROUTE_CONSTANTS.home} component={Home} />
        <Route path={ROUTE_CONSTANTS.schedule} component={Schedule} />
        <Route path={ROUTE_CONSTANTS.contacts} component={Contact} />
      </div>
    </BrowserRouter>
  );
}

export default App;
