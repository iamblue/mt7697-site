import React from 'react';

import styles from './styles.css';
import Img from './97.png'
const Header = () => (
  <div className={styles.base}>
    <div className={styles.content}>
      <img src={Img} className={styles.logo} />
      <ul>
        <li>Platform</li>
        <li>IoT solution</li>
        <li>PCBA</li>
        <li>Buy</li>
        <li>FB Group</li>
        <li>MTK Forum</li>
      </ul>
    </div>
  </div>
);

export default Header;
