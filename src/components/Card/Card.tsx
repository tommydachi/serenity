import { ReactNode } from "react";
import "./Card.css"

type CardProps = {
  image: ReactNode,
  header: string | ReactNode,
  body: string | ReactNode;
}

export const Card = ({ image, header, body }: CardProps) => {
  return (
    <div className="card-container">
      <div className="card-image">{image}</div>
      <div className="card-details">
        <div className="card-header">
          {header}
        </div>
        <div className="card-body">{body}</div>
      </div>
    </div>
  )
}