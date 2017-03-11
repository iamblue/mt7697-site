import React from 'react';

import compose from 'recompose/compose';
import Card from 'mtk-ui/lib/Card';
import { withGetMessages } from 'react-intl-inject-hoc';

import styles from './styles.css';
import messages from './messages';

import ShowImg from './untitled.png';

const Show = () => (
  <div className={styles.base} style={{ backgroundImage: 'url(' + ShowImg + ')' }}>
    <div className={styles.content}>
       <h2>MT7697</h2>
       <h1>就是柒。</h1>
    </div>
  </div>
);

export default Show;
