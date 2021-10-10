import React from 'react';
import './Home.css';
import Image from '@src/assets/images/android-icon-192x192.png';
import SvgImage from '@src/assets/images/fighter.svg';

const Home = () => {
  return (
    <div>
      <div>Home running</div>
      <div className="box">
        <img src={Image} alt="url-loader from webpack" />
        <SvgImage />
      </div>
    </div>
  );
};

export default Home;
