import React, { FC } from 'react';
import styles from './Dot.module.scss';

const Dot: FC<{
  customClassName?: string;
}> = ({ customClassName }): JSX.Element => {
  return <div className={`${styles.dot} ${customClassName || ''}`} />;
};

export default Dot;
