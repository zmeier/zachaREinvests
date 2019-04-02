import { Link } from "gatsby";
import React from "react";

export interface FAQLink {
  url: string;
  label: string;
}

interface FAQElementProps {
  question: string;
  answer: string;
  link?: FAQLink;
}

export const FAQElement: React.SFC<FAQElementProps> = props => {
  return (
    <div>
      <h3>{props.question}</h3>
      <div className="line-break-text">
        <p>{props.answer}</p>
        {props.link ? <Link to={props.link.url}>{props.link.label}</Link> : null}
      </div>
    </div>
  );
};
