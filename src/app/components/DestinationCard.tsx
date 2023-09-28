import React from "react";
import styles from "../styles/DestinationCard.module.css";
import Image from "next/image";

const DestinationCard: React.FC = () => {
  return (
    <div className={styles.destinationCard}>
      <div className={styles.title}>
        Discover the World, Enrich Your Education: Choose Study Abroad
      </div>
      <div className={styles.subtitle}>
        Broaden Your Horizons, Unleash Your Potential
      </div>
      <div className={styles.destinations}>
        {/* Display study destinations */}
        {/* Each destination box should have an image, study info, and a "Learn More" button */}
        {/* Repeat this for the desired number of destinations */}
        <div className={styles.destinationBox}>
          <Image
            src="/australia.jpg"
            alt="Australia"
            width={200}
            height={200}
            className={styles.image}
          />
          <div className={styles.studyInfo}>Study in Australia</div>
          <button className={styles.learnMoreButton}>Learn More</button>
        </div>

        <div className={styles.destinationBox}>
          <Image
            src="/usa.jpg"
            alt="USA"
            width={200}
            height={200}
            className={styles.image}
          />
          <div className={styles.studyInfo}>Study in USA</div>
          <button className={styles.learnMoreButton}>Learn More</button>
        </div>
        <div className={styles.destinationBox}>
          <Image
            src="/canada.jpg"
            alt="Canada"
            width={200}
            height={200}
            className={styles.image}
          />
          <div className={styles.studyInfo}>Study in Canada</div>
          <button className={styles.learnMoreButton}>Learn More</button>
        </div>
        <div className={styles.destinationBox}>
          <Image
            src="/uk.jpg"
            alt="UK"
            width={200}
            height={200}
            className={styles.image}
          />
          <div className={styles.studyInfo}>Study in UK</div>
          <button className={styles.learnMoreButton}>Learn More</button>
        </div>
        <div className={styles.destinationBox}>
          <Image
            src="/korea.jpg"
            alt=""
            width={200}
            height={200}
            className={styles.image}
          />
          <div className={styles.studyInfo}>Study in South Korea</div>
          <button className={styles.learnMoreButton}>Learn More</button>
        </div>
        <div className={styles.destinationBox}>
          <Image
            src="/europe.png"
            alt=""
            width={200}
            height={200}
            className={styles.image}
          />
          <div className={styles.studyInfo}>Study in Europe</div>
          <button className={styles.learnMoreButton}>Learn More</button>
        </div>

        {/* Repeat this structure for other destination boxes */}
      </div>
    </div>
  );
};

export default DestinationCard;
