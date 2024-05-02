'use client'

import React, {FC, ReactElement} from 'react';
import globalStyles from '@/src/assets/scss/globalStyles.module.scss';
import { constants } from '@/src/assets/constants';
import Image from 'next/image';
import styles from './Stack.module.scss';
const Stack: FC = (): ReactElement => {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={globalStyles.container}>
          <div className={styles.inner}>
            <h2 className={globalStyles.title}>Technology stack</h2>
            <div className={styles.wrapper_stack}>
              {constants.stack.map((item) => (
                <div key={item.id} className={styles.stack}>
                  <Image
                    src={item.icon}
                    width={123}
                    height={123}
                    alt={item.alt}
                  />
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stack;
