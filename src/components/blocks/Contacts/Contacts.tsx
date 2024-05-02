import React, { FC } from 'react';
import globalStyles from '@/src/assets/scss/globalStyles.module.scss';
import styles from './Contacts.module.scss';

const Contacts: FC = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={globalStyles.container}>
        <div className={styles.inner}>
          <div className={styles.title}>
            Let’s make your service
            <div>the best choice for the users </div>
          </div>
          <div className={styles.btn}>mail@gmail.com</div>
          {/*<div className={styles.socials}>*/}
          {/*  <SocialList />*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
