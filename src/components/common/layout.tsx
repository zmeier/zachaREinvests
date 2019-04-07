import CssBaseline from "@material-ui/core/CssBaseline";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";

import zachaREI_logo from "../../images/zachaREI_logo.svg";
import "../../styles/index.scss";
import { Footer } from "./footer";
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
  return (
    <>
      <CssBaseline />
      <NavBar
        siteTitle={site.siteMetadata.title}
        siteLogo={zachaREI_logo}
        navLinks={[
          { label: "How does it work?", href: "/#how-it-works" },
          { label: "FAQ", href: "/faq" },
          { label: "About", href: "/about" },
        ]}
        primaryAction={{label: "Sell your land", href: "/sell"}}
      />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};
