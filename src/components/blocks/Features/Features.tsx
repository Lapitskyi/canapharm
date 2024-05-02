'use client'

import React, {FC, ReactElement} from 'react';
import {constants} from '@/src//assets/constants';
import globalStyles from '@/src/assets/scss/globalStyles.module.scss';

import Image from 'next/image';
import styles from './Features.module.scss';
import Dot from "@/src/components/UI/Dot/Dot";

const Features: FC = (): ReactElement => {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.wrapper_images}>
          <Image
            src="/images/cana_4.png"
            width={460}
            height={680}
            alt="login screen"
          />
        </div>
        <div className={globalStyles.container}>
          <div className={styles.inner}>
            <div className={styles.column}>
              <h2 className={globalStyles.title}>Features</h2>
              <ul className={globalStyles.list}>
                {constants.features.map((item) => (
                  <div
                    key={item.id}
                  >
                    <li>
                      <div className={globalStyles.wrapper_text}>
                        <Dot/>
                        <p>{item.text}</p>
                      </div>
                    </li>
                  </div>
                ))}
              </ul>
            </div>
            <div className={styles.column}>
              <div
              >
                <div>
                  <Image
                    src="/images/feature.png"
                    width={870}
                    height={670}
                    alt="Dashboard Doctor tablet screen"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
