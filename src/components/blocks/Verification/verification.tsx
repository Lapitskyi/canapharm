import React, {FC, ReactElement} from 'react';
import globalStyles from '@/src/assets/scss/globalStyles.module.scss';
import styles from './Verification.module.scss';
import Image from 'next/image';
import Dot from "@/src/components/UI/Dot/Dot";


const Verification: FC = (): ReactElement => {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={globalStyles.container}>
          <div className={styles.inner}>
            <div className={styles.column}>
              <h2 className={globalStyles.title}>doctor’s Verification</h2>
              <div
              >
                <div className={globalStyles.wrapper_text}>
                  <Dot />
                  <p>
                    Doctor interface allows medical practitioners to get
                    authorized in the system, upload documents, medical license
                    & qualification validation through www.vouched.id, as well
                    as issue prescriptions.
                  </p>
                </div>
              </div>
              <div className={styles.wrapper_info}>
                <div className={`${styles.figure} ${styles.figure_1}`}>
                  <div className={styles.text}>Medical license</div>
                  <Dot customClassName={`${styles.plus} ${styles.plus_1}`} />
                </div>
                <div className={styles.progress} />
                <div className={`${styles.figure} ${styles.figure_2}`}>
                  <Dot customClassName={`${styles.plus} ${styles.plus_2}`} />
                  <div className={styles.text}>Verify the state ID</div>
                </div>
                <div className={`${styles.figure} ${styles.figure_3}`}>
                  <Dot customClassName={`${styles.plus} ${styles.plus_3}`} />
                  <div className={styles.text}>
                    Qualification of the medical practitioner
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.column}>
              <div
              >
                <div>
                  <Image
                    src="/images/verification.png"
                    width={868}
                    height={673}
                    alt="verification screen"
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

export default Verification;
