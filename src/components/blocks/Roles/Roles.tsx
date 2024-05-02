import React, {FC, ReactElement} from 'react';
import Image from 'next/image';
import globalStyles from '@/src/assets/scss/globalStyles.module.scss';
import styles from './Roles.module.scss';
import Dot from "@/src/components/UI/Dot/Dot";


const Roles: FC = (): ReactElement => {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={globalStyles.container}>
          <div className={styles.inner}>
            <div className={styles.column}>
              <div
              >
                <div className={styles.wrapper_img}>
                  <div className={styles.img_1}>
                    <Image
                      src="/images/cana_3.png"
                      width={605}
                      height={879}
                      alt="login screen"
                    />
                  </div>
                  <div className={styles.img_2}>
                    <div className={globalStyles.frosted_glass}>
                      <Image
                        src="/images/login_screen_2.png"
                        width={879}
                        height={560}
                        alt="login screen"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.column}>
              <h2 className={globalStyles.title}>roles of users:</h2>
              <ul className={`${globalStyles.list} ${styles.list}`}>
                <div
                >
                  <li>
                    <div className={globalStyles.wrapper_text}>
                      <Dot />
                      <p>
                        Doctor interface allows medical practitioners to get
                        authorized in the system, upload documents, medical
                        license & qualification validation through
                        www.vouched.id, as well as issue prescriptions.
                      </p>
                    </div>
                  </li>
                </div>

                <div
                >
                  <li>
                    <div className={globalStyles.wrapper_text}>
                      <Dot />
                      <p>
                        Doctor interface allows medical practitioners to get
                        authorized in the system, upload documents, medical
                        license & qualification validation through
                        www.vouched.id, as well as issue prescriptions.
                      </p>
                    </div>
                  </li>
                </div>

                <div
                >
                  <li>
                    <div className={globalStyles.wrapper_text}>
                      <Dot />
                      <p>
                        Doctor interface allows medical practitioners to get
                        authorized in the system, upload documents, medical
                        license & qualification validation through
                        www.vouched.id, as well as issue prescriptions.
                      </p>
                    </div>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roles;
