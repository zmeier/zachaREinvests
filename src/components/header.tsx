import { Link } from "gatsby";
import React from "react";

import logo from "../images/zachaREI_logo.svg";

interface HeaderProps {
  siteTitle: string;
}

export const Header: React.SFC<HeaderProps> = props => {
  return (
    <header
      style={{
        background: `steelblue`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <span>{props.siteTitle}</span>
          </Link>
        </h1>
      </div>
    </header>
  );
};

Header.defaultProps = {
  siteTitle: "",
};
