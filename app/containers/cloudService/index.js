import React from 'react';

import compose from 'recompose/compose';
import Card from 'mtk-ui/lib/Card';
import Button from 'mtk-ui/lib/Button';
import { withGetMessages } from 'react-intl-inject-hoc';

import styles from './styles.css';
import messages from './messages';

import MCS from './mcs.png';
import Flowchain from './flowchain.png';

const CloudService = ({
  getMessages: t,
}) => (
  <div className={styles.base}>
    <div className={styles.content}>
      <h2>{t('ioTServiceSolution')}</h2>
      <div className={styles.container}>
        <Card className={styles.card}>
          <p className={styles.cardTitle}>Public cloud</p>
          <div className={styles.cardContent}>
          <img src={MCS} className={styles.mcs}/>
          </div>
          <Button className={styles.button}>
            SDK 詳情
          </Button>
        </Card>
        <Card className={styles.card}>
          <p className={styles.cardTitle}>Private cloud</p>
          <div className={styles.cardContent}>
          <img src={MCS} className={styles.mcs}/>
          </div>
          <Button className={styles.button}>
            SDK 詳情
          </Button>
        </Card>
        <Card className={styles.card}>
          <p className={styles.cardTitle}>Blockchain solution</p>
          <div className={styles.cardContent}>
          <img src={Flowchain} className={styles.flowchain}/>
          </div>
          <Button className={styles.button} kind="cancel">
            SDK 詳情 ( Coming soon )
          </Button>
        </Card>
      </div>
    </div>
  </div>
);

export default compose(
  withGetMessages(messages, 'CloudService'),
)(CloudService);
