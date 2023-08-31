import styles from "./HeadingText.module.scss";
import { Typewriter } from "react-simple-typewriter";

export const HeadingText = () => {
  return (
    <div className={styles.HeadingText}>
      <span className={styles.HeadingTextHeading}>
        <Typewriter
          words={["Hey, I'm Tommy!"]}
          loop={5}
          cursor
          cursorStyle="_"
          typeSpeed={150}
          deleteSpeed={100}
          delaySpeed={1000}
        />

      </span>
    </div>
  );
};
