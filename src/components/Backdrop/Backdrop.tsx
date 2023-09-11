import styles from "./Backdrop.module.scss";

type Props = {
  modalOpen: boolean,
  handleClose: () => void;
}

export const Backdrop = ({ modalOpen, handleClose }: Props) => {
  return (
    <>
      {modalOpen && (
        <div onClick={(e) => {
          handleClose()
          e.stopPropagation()
        }
      } className={styles.Backdrop} />
      )}
    </>
  );
};
