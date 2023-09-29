import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Footer - 30% */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.logo}>
            <Image
              src="/consultancy_logo.jpg"
              alt="Logo"
              width={100}
              height={100}
            />
          </div>
          <div className={styles.consultancyInfo}>
            <p>Success Education and Migration Services</p>
            <p>Pokhara - Siddhartha Chowk, Nepal</p>
            <p>Call: +977 9861060548</p>
            <p>Email: info@successeducation.com</p>
          </div>
          <div className={styles.socialMediaIcons}>
            <a href="https://facebook.com">
              <Image
                src="/facebook.png"
                alt="Facebook"
                width={30}
                height={30}
              />
            </a>
            <a href="https://gmail.com">
              <Image src="/gmail.png" alt="Gmail  " width={30} height={30} />
            </a>
            <a href="https://instagram.com">
              <Image
                src="/instagram.png"
                alt="Instagram"
                width={30}
                height={30}
              />
            </a>
            <a href="https://linked.com">
              <Image
                src="/linkedin.png"
                alt="LinkedIn"
                width={30}
                height={30}
              />
            </a>
            {/* Add more social media icons as needed */}
          </div>
          <div className={styles.columnTitles}>
            <div className={styles.column}>
              <div className={styles.header}>Student Services</div>
              <ul>
                <li>
                  <a href="#">Service 1</a>
                </li>
                <li>
                  <a href="#">Service 2</a>
                </li>
                {/* Add more service links */}
              </ul>
            </div>
            <div className={styles.column}>
              <div className={styles.header}>Study Abroad</div>
              <ul>
                <li>
                  <a href="#">Option 1</a>
                </li>
                <li>
                  <a href="#">Option 2</a>
                </li>
                {/* Add more study abroad options */}
              </ul>
            </div>
            <div className={styles.column}>
              <div className={styles.header}>Quick Links</div>
              <ul>
                <li>
                  <a href="#">Link 1</a>
                </li>
                <li>
                  <a href="#">Link 2</a>
                </li>
                {/* Add more quick links */}
              </ul>
            </div>
            <div className={styles.column}>
              <div className={styles.header}>About Us</div>
              <ul>
                <li>
                  <a href="#">About 1</a>
                </li>
                <li>
                  <a href="#">About 2</a>
                </li>
                {/* Add more about us options */}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
