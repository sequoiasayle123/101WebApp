import React from 'react';
import '../index.css';
import Header from '../components/TitleBar/TitleBar';


function Home() {
  return (
    <div>
      <Header text="Home" />
      <div class="grid-container">
        <p>Hello</p>
      </div>
    </div>
  );
};

export default Home;