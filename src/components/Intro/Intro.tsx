import styles from "./Intro.module.scss";
import "aos/dist/aos.css";
import classNames from "classnames";
import React from "react";
import CountUp from "react-countup";

export const Intro = () => {
  const [days, setDays] = React.useState<number>(0);
  React.useEffect(() => {
    const current = new Date();
    const startDate = new Date("2023-05-16");
    const diff = current.getTime() - startDate.getTime();
    setDays(Math.floor(diff / (1000 * 60 * 60 * 24)));
  }, []);

  return (
    <>
      <div className={styles.Intro}>
        <div className={styles.IntroContainer}>
          <div
            className={classNames(styles.Text, styles.TextFirst)}
            data-aos="zoom-in-down"
            data-aos-delay="500"
          >
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
            <span>
              and for the past {' '}
              <CountUp end={days} duration={5} />
              {' '}days, I've been...
            </span>
          </div>
        </div>
        <div className={styles.IntroContainer}>
          <div
            className={styles.Text}
            data-aos="zoom-in-up"
            data-aos-delay="2750"
          >
            <span>a frontend software engineer.</span>
          </div>
        </div>
      </div>
    </>
  );
};
