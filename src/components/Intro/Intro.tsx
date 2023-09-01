import styles from "./Intro.module.scss";
import "aos/dist/aos.css";
import classNames from "classnames";

export const Intro = () => {
  return (
    <>
      <div className={styles.Intro}>
        <div className={styles.IntroContainer}>
          <div className={classNames(styles.Text, styles.TextFirst)} data-aos="zoom-in-down" data-aos-delay="500">
            <span>Okay, let's do this one last time...</span>
          </div>
        </div>
        <div className={styles.IntroContainer}>
          <div className={styles.Text} data-aos="zoom-in" data-aos-delay="1250">
            <span>My name is Tommy Truong</span>
          </div>
        </div>
        <div className={styles.IntroContainer}>
          <div className={styles.Text} data-aos="zoom-in" data-aos-delay="2000">
            <span>and for the past 4 months, I've been...</span>
          </div>
        </div>
        <div className={styles.IntroContainer}>
          <div className={styles.Text} data-aos="zoom-in-up" data-aos-delay="2750">
            <span>a frontend software engineer.</span>
          </div>
        </div>
      </div>
    </>
  );
};
