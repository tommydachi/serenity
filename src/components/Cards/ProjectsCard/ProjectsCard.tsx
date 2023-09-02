import styles from './ProjectsCard.module.scss';

type ProjectsCardProps = {
  name: string;
  description: string;
  type: string,
  onClick: () => void;
};

export const ProjectsCard = ({ name, description, type, onClick }: ProjectsCardProps) => {
  return (
    <div className={styles.ProjectsCard}>
      <div className={styles.ProjectsCardName}>
        <span className={styles.ProjectsCardNameTitle}>{name}</span>
        <span className={styles.ProjectsCardNameType}>{type}</span>
      </div>
      <div className={styles.ProjectsCardDesc}>
        <span>{description}</span>
      </div>
      <div className={styles.ProjectsCardSeeMore}>
        <span onClick={onClick}>More information</span>
      </div>
    </div>
  );
};
