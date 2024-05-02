import React, {FC, ReactElement} from 'react';
import styles from './Consultation.module.scss';
import globalStyles from '@/src/assets/scss/globalStyles.module.scss';
import Image from 'next/image';


const Consultation: FC = (): ReactElement => {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={globalStyles.container}>
          <div className={styles.inner}>
            <div className={`${styles.column} ${styles.wrapper_img}`}>
              <div>
                <Image
                  src="/images/consultation.png"
                  width={918}
                  height={800}
                  alt="Video call screen"
                />
              </div>
            </div>
            <div className={styles.column}>
              <h2 className={globalStyles.title}>Virtual consultation</h2>
              <div>
                <div className={styles.text}>
                  Opportunity for the patient to have a virtual appointment with
                  the medical practitioner. We have added the necessary
                  functionality to enable conducting virtual appointments
                  through the platform.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
