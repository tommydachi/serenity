import styles from "./HeadingText.module.scss";
import { Typewriter } from "react-simple-typewriter";

export const HeadingText = ({ useRef }: { useRef: any}) => {
  return (
    <div ref={useRef} className={styles.HeadingText} data-aos="fade-down-right">
      <span className={styles.HeadingTextHeading}>
        <Typewriter
          words={["Hey, I'm Tommy!"]}
          loop={2}
          cursor
          cursorStyle="_"
          typeSpeed={120}
          deleteSpeed={150}
          delaySpeed={1000}
        />

      </span>
    </div>
  );
};
