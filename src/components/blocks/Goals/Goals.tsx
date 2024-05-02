'use client'

import React, {FC, ReactElement} from 'react';
import globalStyles from '@/src/assets/scss/globalStyles.module.scss';
import styles from './Goals.module.scss';
import { constants } from '@/src/assets/constants';

import Image from 'next/image';
import CircleWithShadow from "@/src/components/UI/CircleWithShadow/CircleWithShadow";


const Goals: FC = (): ReactElement => {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.wrapper_images}>
          <div
          >
            <Image
              src="/images/cana_2.png"
              width={252}
              height={400}
              alt="login screen"
            />
          </div>
        </div>
        <h2 className={globalStyles.title}>Goals</h2>
        <div className={styles.inner}>
          {constants.goals.map((item) => (
            <div className={styles.goal} key={item.id}>
              <CircleWithShadow
                icon={item.icon}
                alt={item.alt}
                animate={item.animateName}
                animateDuration={item.duration}
                animateDelay={item.delay}
              />
              <div>{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Goals;
