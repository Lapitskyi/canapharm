'use client'

import React, {FC, ReactElement} from 'react';
import styles from './OptionalFeature.module.scss';
import globalStyles from '@/src/assets/scss/globalStyles.module.scss';
import { constants } from '@/src/assets/constants';

import Image from 'next/image';
import Dot from "@/src/components/UI/Dot/Dot";

const OptionalFeatures: FC = (): ReactElement => {
  return (
    <section>
      <div className={styles.wrapper}>

        <div className={globalStyles.container}>
          <div className={styles.inner}>
            <div className={styles.column}>
              <h2 className={globalStyles.title}>Optional features</h2>
              <div className={styles.suptitle}>
                That can be added to such project types
              </div>
              <ul className={globalStyles.list}>
                {constants.optionalFeatures.map((item) => (
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
            <div className={styles.column}>
              <div
              >
                <div>
                  <Image
                    src="/images/optionalFeatures.png"
                    width={870}
                    height={560}
                    alt="Dashboard analytics screen"
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

export default OptionalFeatures;
