import React from 'react';
import { Button } from 'antd-mobile';
import { history } from 'umi';
import styles from './index.css';

export default function ({ }) {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <p className={styles.description}>To get started, edit <code>src/pages/index.js</code> and save to reload.</p>
      <Button size="large" color="primary" fill="solid" block onClick={() => history.push('/list')}>
        Go to List
      </Button>
    </div>
  );
}
