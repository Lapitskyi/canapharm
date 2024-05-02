import React, { FC } from 'react';
import styles from './Logo.module.scss';
import Image from 'next/image';

const Logo: FC = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Image
        src="/images/logo.png"
        width="320"
        height="187"
        alt="canaPharm"
      />
    </div>
  );
};

export default Logo;
