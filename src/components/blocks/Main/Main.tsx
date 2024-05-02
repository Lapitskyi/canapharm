'use client'

import React, {FC, ReactElement} from 'react';
import styles from './Main.module.scss';

import Image from 'next/image';
import { constants } from '@/src//assets/constants';
import globalStyles from '@/src/assets/scss/globalStyles.module.scss';
import Logo from "@/src/components/UI/Logo/Logo";
import Circle from "@/src/components/UI/Circle/Circle";

const MainPage: FC = (): ReactElement => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.figure_top} />
      <div className={styles.inner}>
        <div className={globalStyles.container}>
          <div className={styles.column}>
            <div className={styles.wrapper_logo}>
              <Logo />
            </div>
            <h1 className={styles.title}>Online healthcare platform </h1>
            <div className={styles.wrapper_icons}>
              {constants.main.map((item) => (
                <Circle
                  key={item.id}
                  text={item.text}
                  background={item.background}
                  icon={item.icon}
                  alt={item.alt}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.wrapper_image}>
            <Image
              src="/images/canabis_bush.png"
              width={793}
              height={1153}
              alt="Canabis bush"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
