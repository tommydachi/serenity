import { ReactNode } from 'react';
import styles from './ContactButton.module.scss';

type Props = {
  platform: string;
  icon?: string | ReactNode;
  onClick: () => void;
};

export const ContactButton = ({ platform, icon, onClick }: Props) => {
  return (
    <div className={styles.ContactButton}>
      <span className={styles.ContactButtonIcon}>
        {icon}

      </span>
      <div className={styles.ContactButtonPlatform} onClick={onClick}>
        <span className={styles.ContactButtonPlatformText}>{platform}</span>
      </div>
    </div>
  );
};
