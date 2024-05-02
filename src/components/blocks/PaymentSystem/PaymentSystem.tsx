import React, {FC, ReactElement} from 'react';

import Image from 'next/image';
import globalStyles from '@/src/assets/scss/globalStyles.module.scss';
import styles from './PaymentSystem.module.scss';

const PaymentSystem: FC = (): ReactElement => {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={globalStyles.container}>
          <div className={styles.inner}>
            <div className={styles.column}>
              <h2 className={globalStyles.title}>Payment system</h2>
              <div
              >
                <div className={styles.text}>
                  Payment system integration: the client requested a “Stripe”
                  payment system, but “Stripe” refused to work with this type of
                  web service. “Square“ payment system has been successfully
                  integrated.
                </div>
              </div>
            </div>
            <div className={styles.column}>
              <div
              >
                <Image
                  src="/images/payment.png"
                  width={953}
                  height={626}
                  alt="Tablet pay screen"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSystem;
