import React from "react";
import styles from "../styles/Hero.module.css";

const HeroSection: React.FC = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.content}>
        <h1 className={styles.title}>Success Education</h1>
        <p className={styles.subtitle}>Explore your study abroad dream</p>
      </div>
    </div>
  );
};

export default HeroSection;
