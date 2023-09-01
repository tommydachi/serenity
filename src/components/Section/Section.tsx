import { ReactNode } from "react";
import "./Section.css";
import "aos/dist/aos.css";

export const Section = ({
  header,
  body,
}: {
  header: string;
  body: string | ReactNode;
}) => {
  return (
    <div className="section">
      <div className="section-header" data-aos="fade-right" data-aos-duration='500'>
        <span className="header-text">{header}</span>
      </div>
      <div className="section-body" data-aos="fade-up" data-aos-duration='500'>{body}</div>
    </div>
  );
};
