'use client'

import React, {FC, ReactElement} from 'react';
import styles from './Functionality.module.scss';
import globalStyles from '@/src/assets/scss/globalStyles.module.scss';

import Image from 'next/image';
import { constants } from '@/src//assets/constants';
import Dot from "@/src/components/UI/Dot/Dot";

const Functionality: FC = (): ReactElement => {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={globalStyles.container}>
          <div className={styles.inner}>
            <div className={`${styles.column} ${styles.wrapper_img}`}>
              <div
              >
                <Image
                  src="/images/phone.png"
                  width={787}
                  height={720}
                  alt="Phone notification screen"
                />
              </div>
            </div>

            <div className={styles.column}>
              <h2 className={globalStyles.title}>Functionality</h2>
              <ul className={globalStyles.list}>
                {constants.functionality.map((item) => (
                  <div
                    key={item.id}
                  >
                    <li>
                      <div className={globalStyles.wrapper_text}>
                        <Dot />
                        <p>{item.text}</p>
                      </div>
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Functionality;
