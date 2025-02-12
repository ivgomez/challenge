import React from "react";
import FirmFactCard from "./FirmFactCard";
import styles from "./FirmFacts.module.scss";

const FirmFacts = () => {
  return (
    <div className={styles.firmFacts}>
      <FirmFactCard variant='default' buttonVariant='icon' showIcon textLines={2} position='center' />
      <FirmFactCard variant='default' buttonVariant='icon' textLines={2} position='center' />
      <FirmFactCard variant='default' buttonVariant='default' showIcon textLines={1} position='center' />
      <FirmFactCard variant='default' buttonVariant='default' textLines={2} position='center' />
      <FirmFactCard variant='default' buttonVariant='default' textLines={2} position='top' />
      <FirmFactCard variant='border' buttonVariant='disabled' showIcon textLines={2} position='top' />
      <FirmFactCard variant='border' buttonVariant='success' showIcon textLines={2} position='top' />
    </div>
  );
};

export default FirmFacts;
