import React, { FC } from 'react';
import styles from './Circle.module.scss';
import Image from 'next/image';

const Circle: FC<{
  icon: string;
  alt: string;
  text: string;
  background?: string;
}> = ({ icon, alt, text, background }): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.icon}
        style={{
          background: background,
        }}
      >
        <Image src={icon} width={35} height={35} alt={alt || 'icon'} />
      </div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default Circle;
