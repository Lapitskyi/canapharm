import React, {FC, ReactElement} from 'react';
import Image from 'next/image';
import styles from './Dashboard.module.scss';
import globalStyles from '@/src/assets/scss/globalStyles.module.scss';
import Dot from "@/src/components/UI/Dot/Dot";

const Dashboard: FC = (): ReactElement => {
  return (
    <div className={styles.wrapper}>
      <div className={globalStyles.container}>
        <div className={styles.inner}>
          <div>
            <div>
              <div className={styles.wrapper_text}>
                <Dot />
                <p>
                  The web platform supplies the patients qualifying for medical
                  cannabis treatment with the connection to licensed medical
                  practitioners. Such a service improves the patients’ overall
                  quality of life and has a positive impact on the emotional,
                  behavioral and psychological state of the nation.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.column}>
            <div>
                <div>
                  <Image
                    src="/images/dashboard.png"
                    width={870}
                    height={670}
                    alt="Dashboard Patient tablet screen"
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
