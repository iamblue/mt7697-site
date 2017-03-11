import React from 'react';

import compose from 'recompose/compose';
import { withGetMessages } from 'react-intl-inject-hoc';

import styles from './styles.css';
import messages from './messages';

const CloudService = ({
  getMessages: t,
}) => (
  <div className={styles.base}>
    <p>{t('thanks')}</p>
  </div>
);

export default compose(
  withGetMessages(messages, 'Footer'),
)(CloudService);
