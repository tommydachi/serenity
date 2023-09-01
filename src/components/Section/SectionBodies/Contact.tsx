import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import { ContactButton } from "../..";
import styles from './Contact.module.scss';

export const Contact = () => {
  const onClick = (url: string, openInNewTab?: boolean) => {
    window.open(url, openInNewTab ? '' : '_blank');
  }

  return (
    <>
      <p>
        I'm always available for a chat - feel free to message me on LinkedIn or
        shoot me an email!
      </p>
      <div className={styles.Contact}>
        <ContactButton
          platform={"LinkedIn"}
          icon={
            <FontAwesomeIcon icon={faLinkedin} style={{ color: "#ffffff" }} />
          }
          onClick={() => onClick("https://www.linkedin.com/in/tommy--truong/")}
        />
        <ContactButton
          platform={"GitHub"}
          icon={
            <FontAwesomeIcon icon={faGithub} style={{ color: "#ffffff" }} />
          }
          onClick={() => onClick("https://github.com/tommydachi")}
        />
        <ContactButton
          platform={"Email"}
          icon={
            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#ffffff" }} />
          }
          onClick={() => onClick("mailto:tommy.truong618@gmail.com", false)}
        />
        <ContactButton
          platform={"Resume"}
          icon={<FontAwesomeIcon icon={faFile} style={{ color: "#ffffff" }} />}
          onClick={() => onClick("https://www.linkedin.com/in/tommy--truong/")}
        />
      </div>
    </>
  );
};
