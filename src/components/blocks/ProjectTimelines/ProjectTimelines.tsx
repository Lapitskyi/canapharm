'use client'

import React, {FC, ReactElement} from 'react';
import { constants } from '@/src/assets/constants';
import globalStyles from '@/src/assets/scss/globalStyles.module.scss';
import styles from './ProjectTimelines.module.scss';
import Image from 'next/image';


const ProjectTimelines: FC = (): ReactElement => {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.wrapper_img}>
          <div
          >
            <Image
              src="/images/cana_1.png"
              width={335}
              height={680}
              alt="Canabis bush"
            />
          </div>
        </div>
        <h2 className={globalStyles.title}> Project timelines</h2>
        <div className={styles.inner}>
          <div
          >
            <div className={styles.progress} />
          </div>
          <div className={styles.timelines}>
            {constants.timelines.map((item) => (
              <div
                key={item.id}
                className={`${styles.timeline} ${
                  styles[`timeline_${item.id}`]
                }`}
              >
                <div className={`${styles.name} ${styles[`name_${item.id}`]}`}>
                  {item.name}
                </div>
                <div className={styles.mounth}>{item.mounth}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectTimelines;
