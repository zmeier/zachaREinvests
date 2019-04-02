import { graphql, useStaticQuery } from "gatsby";
import React from "react";

import zachaREI_logo from "../images/zachaREI_logo.svg";
import "../styles/index.scss";
import { NavBar } from "./navbar";

export const Layout: React.SFC = props => {
  const { site } = useStaticQuery(
    graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  const currentYear = new Date().getFullYear();
  const copyright = <div id="copyright">© 2019{currentYear > 2019 ? `-${currentYear}` : ""} zachaREI</div>;
  return (
    <>
      <NavBar
        siteTitle={site.siteMetadata.title}
        siteLogo={zachaREI_logo}
        navLinks={[
          { label: "How does it work?", href: "/#how-it-works" },
          { label: "FAQ", href: "/faq" },
          { label: "About", href: "/about" },
        ]}
      />
      <main>{props.children}</main>
      <div className="container">
        <footer className="pt-4 my-md-5 pt-md-5 border-top">{copyright}</footer>
      </div>
    </>
  );
};
