import { ReactNode } from "react"
import "./Section.css"

export const Section = ({header, body}: {header: string, body: string | ReactNode}) => {
  return (
    <div className="section">
      <div className="section-header">
        <span className="header-text">
          {header}
        </span>
      </div>
      <div className="section-body">
        {body}
      </div>

    </div>
  )

}