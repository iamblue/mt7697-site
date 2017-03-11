import React from 'react';

import compose from 'recompose/compose';
import Card from 'mtk-ui/lib/Card';
import { withGetMessages } from 'react-intl-inject-hoc';

import styles from './styles.css';
import messages from './messages';
import Bg from './bg.jpg';

const PCBA = ({
  getMessages: t,
}) => (
  <div className={styles.base} style={{ backgroundImage: 'url(' + Bg + ')' }}>
    <div className={styles.content}>
      <h1>MT7697 PCBA</h1>
      <a className={styles.info}>進一步了解</a>
    </div>
  </div>
);

export default compose(
  withGetMessages(messages, 'PCBA'),
)(PCBA);

