import React from 'react';
import '../components/HomePage.css';

function HomePage() {
  return (
    <div className='homepage-container'>
      <div className='homepage-card'>
        <div className='homepage-img'></div>
        <h1 className='hompage-welcome-title'>
          Welcome to <span id='homepage-bold-text'>Fit</span>Finder!
        </h1>
        <button className='hompage-getstarted-btn'>
          <span className='hompage-left-arrows'>{"<<<"}</span>
          Click here to get start
          <span className='hompage-right-arrows'>{">>>"}</span>
        </button>
        <div></div>
      </div>
    </div>
  );
}

export default HomePage;
