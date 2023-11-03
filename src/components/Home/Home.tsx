import React from 'react';

import ContentArea from './ContentArea';
import Navbar from '../Header/Navbar';
import NavbarButtons from '../Header/NavbarButtons';

import PopUp from './PopUp';
function Home() {
  return (
    <div>
      <Navbar />
      <NavbarButtons context="home" />
      <ContentArea />
      <PopUp/>
    </div>
  );
}

export default Home;
