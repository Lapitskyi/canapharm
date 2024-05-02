import React, {FC, ReactElement} from 'react';
import styles from './Card.module.scss';
import Image from 'next/image';

const Card: FC<{
  avatar: string;
  name: string;
  job: string;
  text: string;
  figure: string;
}> = ({ avatar, name, job, text, figure }): ReactElement => {
  return (
    <div className={styles.card}>
      <div className={styles.card_top}>
        <div className={styles.user}>
          <div className={styles.avatar}>
            <Image src={avatar} alt="user" width={58} height={58} />
          </div>
          <div>
            <div className={styles.name}>{name}</div>
            <div className={styles.job}>{job}</div>
          </div>
        </div>
        <div className={styles.figures}>
          <Image src={figure} alt="figure"  width={70} height={52}  />
        </div>
      </div>
      <div className={styles.card_text}>{text}</div>
    </div>
  );
};

export default Card;
