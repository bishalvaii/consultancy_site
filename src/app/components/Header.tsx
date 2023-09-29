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
              <a href="/about">About Us</a>
            </li>
            <li className={styles.dropdown}>
              <a href="/study">Study Abroad &#9662;</a>
              <div className={styles.dropdownContent}>
                <a href="#">Study in Australia</a>
                <a href="#">Study in Canada</a>
                <a href="#">Study in USA</a>
                <a href="#">Study in UK</a>
                <a href="#">Study in South Korea</a>
                <a href="#">Study in Europe</a>
              </div>
            </li>
            <li className={styles.dropdown}>
              <a href="/services">Student Services &#9662;</a>
              <div className={styles.dropdownContent}>
                <a href="#">Visa Application</a>
                <a href="#">PTE Test preparation</a>
                <a href="#">IELTS Test preparation</a>
                <a href="#">Admission Counselling</a>
                <a href="#">Student Health Insurance</a>
                <a href="#">Student Accomodation</a>
              </div>
            </li>
            <li className={styles.dropdown}>
              <a href="/study">Scholarships &#9662;</a>
              <div className={styles.dropdownContent}>
                <a href="#">Scholarships in Australia</a>
                <a href="#">Scholarships in Canada</a>
                <a href="#">Scholarships in USA</a>
                <a href="#">Scholarships in UK</a>
                <a href="#">Scholarships in South Korea</a>
                <a href="#">Scholarships in Europe</a>
              </div>
            </li>
            <li className={styles.dropdown}>
              <a href="/study">Test preparation &#9662;</a>
              <div className={styles.dropdownContent}>
                <a href="#">IELTS test preparation</a>
                <a href="#">PTE test preparation</a>
                <a href="#">GRE test preparation</a>
                <a href="#">GMAT test preparation</a>
                <a href="#">TOEFL test preparation</a>
                <a href="#">SAT test preparation</a>
              </div>
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
