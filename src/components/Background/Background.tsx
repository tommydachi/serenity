
import styles from './Background.module.scss';

export const Background = ({ children }: { children: any }) => {
  return <div className={styles.Gradient}>{children}</div>
}
