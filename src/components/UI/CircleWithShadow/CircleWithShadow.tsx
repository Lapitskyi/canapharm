import React, { FC } from 'react';

import Image from 'next/image';
import styles from './CircleWithShadow.module.scss';

const CircleWithShadow: FC<{
  icon: string;
  alt: string;
  background?: string;
  animate?: string;
  animateDuration?: number;
  animateDelay?: number;
  animateBox?: 'span' | 'div';
}> = ({
  icon,
  alt,
  background,
  animate,
  animateDuration,
  animateDelay,
  animateBox = 'span',
}): JSX.Element => {
  return (
    <div

    >
      <div className={styles.wrapper}>
        <div
          className={styles.icon}
          style={{
            background: background,
          }}
        >
          <Image src={icon} width={75} height={83} alt={alt || 'icon'} />
        </div>
      </div>
    </div>
  );
};

export default CircleWithShadow;
