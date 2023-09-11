import { AnimatePresence, motion } from "framer-motion";
import styles from "./Modal.module.scss";

export const Modal = ({
  handleClose,
  modalOpen,
  selected = {},
}: {
  selected: any;
  handleClose: any;
  modalOpen: boolean;
}) => {
  return (
    <AnimatePresence
      // Disable any initial animations on children that
      // are present when the component is first rendered
      initial={false}
      // Only render one component at a time.
      // The exiting component will finish its exit
      // animation before entering component is rendered
      mode="wait"
      // Fires when all exiting nodes have completed animating out
      onExitComplete={() => null}
    >
      {modalOpen && (
        <motion.div
          key="modal"
          className={styles.Modal}
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, x: "-50%", y: "-50%" }}
          exit={{ scale: 0 }}
        >
          <div className={styles.ModalTitle}>
            <span className={styles.ModalTitleName}>{selected?.name}</span>
            <span className={styles.ModalTitleType}>{selected?.type}</span>
          </div>
          <div className={styles.ModalDesc}>{selected?.description_full}</div>
          <div className={styles.ModalFooter}>
            <div className={styles.ModalFooterInfo}>
              <span>
                Technologies used: <i>{selected?.technologies}</i>
              </span>
              <span>
                Link:{" "}
                <i>
                  {selected?.link.startsWith("https") ? (
                    <span className={styles.ModalLink} onClick={() => window.open(selected?.link, "_blank")}>
                      {selected?.link}
                    </span>
                  ) : (
                    selected?.link
                  )}
                </i>
              </span>
            </div>
            <motion.button
              className={styles.ModalFooterButton}
              onClick={handleClose}
            >
              Close
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
