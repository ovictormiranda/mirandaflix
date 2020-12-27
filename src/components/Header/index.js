import React from 'react';
import './index.css';

export default ({black}) => {
  return(
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="/">
          <img src="https://fontmeme.com/permalink/201222/db8dcada88985a9dab90bae80bb0adae.png" alt="Netflix"/>
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img src="https://pro2-bar-s3-cdn-cf1.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/98032aebff601c1d993e12a0_rw_600.png?h=8030f4d5734548795c22da59ca72e3e1" alt="Usuário" />
        </a>
      </div>
    </header>
  );
}