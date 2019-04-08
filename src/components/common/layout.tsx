import { Theme, withStyles, WithStyles } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";

import zachaREI_logo from "../../images/zachaREI_logo.svg";
import "../../styles/index.scss";
import { Footer } from "./footer";
import { NavBar } from "./navbar";

const styles = (theme: Theme) => ({
  main: {
    paddingTop: 65,
  },
  [theme.breakpoints.down("xs")]: {
    main: {
      paddingTop: 85,
    },
  },
});

interface LayoutProps extends WithStyles<typeof styles> {
  removeMainPadding?: boolean;
}

const LayoutComponent: React.SFC<LayoutProps> = props => {
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
        primaryAction={{ label: "Sell your land", href: "/sell" }}
      />
      <main className={props.removeMainPadding ? "" : props.classes.main}>{props.children}</main>
      <Footer />
    </>
  );
};

const Layout = withStyles(styles)(LayoutComponent);
export { Layout };
