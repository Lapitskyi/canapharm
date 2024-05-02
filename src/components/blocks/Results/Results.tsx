'use client'

import React, {FC, ReactElement} from 'react';
import styles from './Results.module.scss';
import globalStyles from '@/src/assets/scss/globalStyles.module.scss';
import { constants } from '@/src/assets/constants';
import 'react-multi-carousel/lib/styles.css';
import Carousel from "react-multi-carousel";
import Card from '../../UI/Card/Card';

const responsive = {
  laptop: {
    breakpoint: { max: 3000, min: 1279 },
    items: 1.6,
    slidesToSlide: 1,
  },
  laptopSmall: {
    breakpoint: { max: 1280, min: 1023 },
    items: 2,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 769 },
    items: 2,
    slidesToSlide: 1,
  },
  mobileL: {
    breakpoint: { max: 768, min: 425 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 425, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
const Results: FC = (): ReactElement => {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <div className={styles.column}>
            <div className={globalStyles.container}>
              <h2 className={globalStyles.title}>Results & Testimonials</h2>
              <div

              >
                <div className={styles.text}>
                  We have developed a unique web service that streamlines the
                  process of qualifying for medical cannabis use. It allocates
                  the patient to the nearest licensed medical practitioner and
                  makes sure the qualifying procedure is legal and transparent.
                  Patient’s medical records are kept private and all
                  transactions are anonymous. The platform offers all the
                  necessary functionality for each user type (patient, doctor
                  and admin) as well as an intuitive and simple design.
                </div>
              </div>
            </div>
          </div>

          <div className={styles.column}>
            <div>
              <div className={styles.wrapper_slider}>
                <Carousel
                  ssr
                  infinite
                  responsive={responsive}
                  containerClass={styles.slider}
                  itemClass={styles.itemSlider}
                  centerMode
                >
                  {constants.slider.map((item) => (
                    <Card
                      key={item.id}
                      figure={item.icon}
                      avatar={item.img}
                      name={item.name}
                      job={item.job}
                      text={item.text}
                    />
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
