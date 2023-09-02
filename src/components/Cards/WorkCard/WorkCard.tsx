import { ReactNode } from "react";
import "./WorkCard.css";

type WorkCardProps = {
  image: ReactNode;
  header: string | ReactNode;
  body: string | ReactNode;
};

export const WorkCard = ({ image, header, body }: WorkCardProps) => {

  return (
    <div className="card-container" data-aos="flip-right" data-aos-duration="1000">
      <div className="card-image">{image}</div>
      <div className="card-details">
        <div className="card-header">{header}</div>
        <div className="card-body">{body}</div>
      </div>
    </div>
  );
};
