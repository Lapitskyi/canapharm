'use client'

import React, {FC, ReactElement} from 'react';
import styles from '@/src/assets/scss/globalStyles.module.scss';
import Dashboard from "@/src/components/blocks/Dashboard/Dashboard";
import ProjectTimelines from "@/src/components/blocks/ProjectTimelines/ProjectTimelines";
import Goals from "@/src/components/blocks/Goals/Goals";
import Roles from "@/src/components/blocks/Roles/Roles";
import Verification from "@/src/components/blocks/Verification/verification";
import Consultation from "@/src/components/blocks/Consultation/Consultation";
import PaymentSystem from "@/src/components/blocks/PaymentSystem/PaymentSystem";
import Functionality from "@/src/components/blocks/Functionality/Functionality";
import Features from "@/src/components/blocks/Features/Features";
import Stack from "@/src/components/blocks/Stack/Stack";
import Results from "@/src/components/blocks/Results/Results";
import OptionalFeatures from "@/src/components/blocks/OptionalFeature/OptionalFeatures";
import Contacts from "@/src/components/blocks/Contacts/Contacts";
import MainPage from "@/src/components/blocks/Main/Main";
const Page: FC = (): ReactElement => {
  return (
    <div className={styles.wrapper_main}>
      <MainPage />
      <Dashboard />
      <ProjectTimelines />
      <Goals />
      <Roles />
      <Verification />
      <Consultation />
      <PaymentSystem />
      <Functionality />
      <Features />
      <Stack />
      <Results />
      <OptionalFeatures />
      <Contacts />
    </div>
  );
};

export default Page;
