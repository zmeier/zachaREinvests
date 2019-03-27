import { graphql, useStaticQuery } from "gatsby";
import React from "react";

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
      <NavBar siteTitle={site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: "75px",
        }}
      >
        <main>{props.children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  );
};
