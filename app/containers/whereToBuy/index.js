import React from 'react';

import compose from 'recompose/compose';
import Card from 'mtk-ui/lib/Card';
import Button from 'mtk-ui/lib/Button';
import { withGetMessages } from 'react-intl-inject-hoc';

import messages from './messages';
import styles from './styles.css';
import Seeed from './seeed.png';
import Wot from './wot.png';
import WRTnode from './wrtnode.png';

const WhereToBuy = ({
  getMessages: t,
}) => (
  <div className={styles.base}>
    <div className={styles.content}>
      <h2>{t('title')}</h2>
      <div className={styles.container}>
        <Card className={styles.card}>
          <p className={styles.cardTitle}>Global</p>
          <div className={styles.cardContent}>
          <img src={Seeed} className={styles.seeed}/>
          </div>
          <Button className={styles.button}>
            詳情請進
          </Button>
        </Card>
        <Card className={styles.card} >
          <p className={styles.cardTitle}>Taiwan</p>
          <div className={styles.cardContent}>
            <img src={Wot} className={styles.wot}/>
          </div>
          <Button className={styles.button}>
            詳情請進
          </Button>
        </Card>
        <Card className={styles.card}>
          <p className={styles.cardTitle}>China</p>
          <div className={styles.cardContent}>
          <img src={WRTnode} className={styles.WRTnode}/>
          </div>
          <Button className={styles.button}>
            詳情請進
          </Button>
        </Card>
      </div>
    </div>
  </div>
);

export default compose(
  withGetMessages(messages, 'WhereToBuy'),
)(WhereToBuy);
