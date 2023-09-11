import { ReactNode } from "react";
import styles from './WordCard.module.scss';

type WorkCardProps = {
  image: ReactNode;
  header: string | ReactNode;
  body: string | ReactNode;
};

export const WorkCard = ({ image, header, body }: WorkCardProps) => {

  return (
    <div className={styles.CardContainer} data-aos="flip-right" data-aos-duration="1000">
      <div className={styles.CardImage}>{image}</div>
      <div className={styles.CardDetails}>
        <div className={styles.CardHeader}>{header}</div>
        <div className={styles.CardBody}>{body}</div>
      </div>
    </div>
  );
};
