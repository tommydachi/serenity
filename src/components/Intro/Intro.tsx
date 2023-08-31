import { motion } from "framer-motion";
import styles from "./Intro.module.scss";

export const Intro = () => {
  return (
    <>
      <div className={styles.Intro}>
        <motion.div
          className={styles.First}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.75 }}
        >
          Okay, let's do this one last time...
        </motion.div>
        <motion.div
          className={styles.Second}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5 }}
          >
          My name is Tommy Truong,
        </motion.div>
        <motion.div
          className={styles.Third}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.25 }}
        >
          and for the past 4 months, I've been....
        </motion.div>
        <motion.div
          className={styles.FinalText}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 3 }}
        >
          a frontend software engineer!
        </motion.div>
      </div>
    </>
  );
};
