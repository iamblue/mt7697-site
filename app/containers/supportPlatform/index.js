import React from 'react';

import compose from 'recompose/compose';
import Card from 'mtk-ui/lib/Card';
import Button from 'mtk-ui/lib/Button';
import { withGetMessages } from 'react-intl-inject-hoc';

import messages from './messages';
import styles from './styles.css';
import Arduino from './arduino.svg';
import Linkit from './linkit.png';
import Zephyr from './zephyr.jpg';
import JS from './js.png';
import Physical from './physical.png';
import Ibeacon from './ibeacon.jpg';

const SupportPlatform = ({
  getMessages: t,
}) => (
  <div className={styles.base}>
    <div className={styles.content}>
      <h2>{t('supportPlatform')}</h2>
      <div className={styles.container}>
        <Card className={styles.card}>
          <div className={styles.cardContent}>
          <img src={Linkit} className={styles.linkit}/>
          </div>
          <p style={{marginTop: -10}} className={styles.cardTitle}>Mediatek 原廠提供的 SDK 支持，基於 freeRTOS 實作</p>
          <Button
            className={styles.button}
            onClick={
              () => {
                location.href = 'https://docs.labs.mediatek.com/resource/mt7687-mt7697/zh_tw';
              }
            }
          >
            Tutorial
          </Button>
        </Card>
        <Card className={styles.card}>
          <div className={styles.cardContent} style={{ height: 156 }}>
          <img src={Arduino} className={styles.arduino}/>
          </div>
          <p className={styles.cardTitle}>提供 Arduino IDE 串接以及使用 Arduino 相關開發</p>
          <Button
            className={styles.button}
            onClick={
              () => {
                location.href = 'https://docs.labs.mediatek.com/resource/linkit7697-arduino/en';
              }
            }
          >
            Tutorial
          </Button>
        </Card>
        <Card className={styles.card}>
          <div className={styles.cardContent} style={{ height: 154 }}>
          <img src={Zephyr} className={styles.zephyr}/>
          </div>
          <p className={styles.cardTitle}>提供 ZephyrOS 的支持，以及 96 board 相關開發</p>
          <Button
            className={styles.button}
            kind="cancel"
          >
            Coming soon.
          </Button>
        </Card>
        <Card className={styles.card}>
          <div className={styles.cardContent} style={{ height: 120 }}>
          <img src={JS} className={styles.js} />
          </div>
          <p className={styles.cardTitle}>Microlattice.js, 基於 Jerryscript Engine 實作的 Javascript 平台，並完全支持各大 I/O, wifi , BLE 之 driver.</p>
          <Button
            className={styles.button}
            onClick={
              () => {
                location.href = 'https://iamblue.gitbooks.io/microlattice-js-for-linkit-rtos/content/zh-TW/intro/create/mt7697.html';
              }
            }
          >
            Tutorial
          </Button>
        </Card>
        <Card className={styles.card}>
          <div className={styles.cardContent} style={{ height: 120 }}>
          <img src={Physical} className={styles.physical} />
          </div>
          <p style={{ marginTop: 56 }} className={styles.cardTitle}>Physical web實體網頁開發，基於 Eddystone (google project).</p>
          <Button
            className={styles.button}
            kind="cancel"
          >
            Coming soon.
          </Button>
        </Card>
        <Card className={styles.card}>
          <div className={styles.cardContent} style={{ height: 120 }}>
          <img src={Ibeacon} className={styles.ibeacon}/>
          </div>
          <p style={{ marginTop: 65 }} className={styles.cardTitle}>iBeacon, 基於 Arduino 實作</p>
          <Button
            className={styles.button}
            onClick={
              () => {
                location.href = 'https://docs.labs.mediatek.com/resource/linkit7697-arduino/en/using-bluetooth';
              }
            }
          >
            Tutorial
          </Button>
        </Card>
      </div>
    </div>
  </div>
);

export default compose(
  withGetMessages(messages, 'SupportPlatform'),
)(SupportPlatform);
