import React from "react";
import styles from "../styles/StudyForm.module.css";
import Image from "next/image";

const StudyForm: React.FC = () => {
  return (
    <div className={styles.page}>
      <div className={styles.imageSection}>
        <Image src="/student.png" alt="Background" width={900} height={900} />
      </div>
      <div className={styles.formSection}>
        <h1 className={styles.formTitle}>Study Abroad Form</h1>
        <form className={styles.form}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.formLabel}>
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
                className={styles.formInput}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="course" className={styles.formLabel}>
                Preferred Course:
              </label>
              <input
                type="text"
                id="course"
                name="course"
                placeholder="Preferred course"
                required
                className={styles.formInput}
              />
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                required
                className={styles.formInput}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="contact" className={styles.formLabel}>
                Contact Number:
              </label>
              <input
                type="tel"
                id="contact"
                name="contact"
                placeholder="Your contact number"
                required
                className={styles.formInput}
              />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="location" className={styles.formLabel}>
              Preferred Study Location:
            </label>
            <select id="location" name="location" className={styles.formInput}>
              <option value="">Select location</option>
              <option value="uk">Australia</option>
              <option value="canada">Canada</option>
              <option value="uk">South Korea</option>
              <option value="usa">USA</option>
              <option value="uk">UK</option>
              <option value="Europe">Europe</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.formLabel}>
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message"
              required
              className={styles.formInput}
              rows={5}
            />
          </div>
          <button type="submit" className={styles.formButton}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudyForm;
