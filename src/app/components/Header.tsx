import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      {/* First Row */}
      <div className={styles.topRow}>
        <div className={styles.contactInfo}>
          <span>Email: info@example.com</span>
          <span>Phone: +123 456 7890</span>
        </div>
        <div className={styles.socialIcons}>
          <a href="https://facebook.com">
            <Image src="/facebook.png" alt="Facebook" width={30} height={30} />
          </a>
          <a href="https://linkedin.com">
            <Image src="/linkedin.png" alt="LinkedIn" width={30} height={30} />
          </a>
          <a href="https://instagram.com">
            <Image
              src="/instagram.png"
              alt="Instagram"
              width={30}
              height={30}
            />
          </a>
        </div>
      </div>

      {/* Second Row */}
      <div className={styles.bottomRow}>
        <div className={styles.leftContent}>
          <a href="" className={styles.logo}>
            <Image
              src="/consultancy_logo.jpg"
              alt="Logo"
              width={100}
              height={100}
            />
          </a>
        </div>
        <nav className={styles.menu}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/study">Study Abroad</a>
            </li>
            <li>
              <a href="/services">Student Services</a>
            </li>
            <li>
              <a href="/scholarships">Scholarships</a>
            </li>
            <li>
              <a href="/test-prep">Test Preparation</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </nav>
        <div className={styles.rightContent}>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search"
              className={styles.searchInput}
            />
            <button className={styles.searchButton}>
              <Image src="/search.png" alt="Search" width={20} height={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
