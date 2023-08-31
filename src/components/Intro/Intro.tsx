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
          Let's do this one last time...
        </motion.div>
        <motion.div
          className={styles.Second}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 }}
          >
          My name is Tommy Truong,
        </motion.div>
        <motion.div
          className={styles.Third}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.1 }}
        >
          and I am....
        </motion.div>
        <motion.div
          className={styles.FinalText}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.35 }}
        >
          an aspiring frontend software engineer!
        </motion.div>
      </div>
    </>
  );
};
