import {
  Divider,
  Grid,
  StyleRulesCallback,
  Theme,
  Typography,
  WithStyles,
  withStyles,
} from "@material-ui/core";
import { Link } from "gatsby";
import React from "react";

import zachaREI_logo from "../../images/zachaREI_logo.svg";
import { ContactUs } from "../contact/contactUs";

const styles: StyleRulesCallback = (theme: Theme) => ({
  container: {
    padding: theme.spacing.unit * 2,
  },
  containerItem: {
    paddingBottom: theme.spacing.unit 
  },
  copyright: {
    paddingTop: theme.spacing.unit * 2,
    textAlign: "center",
  },
  link: {
    display: "block",
    paddingBottom: theme.spacing.unit,
  },
});

interface FooterComponentProps extends WithStyles<typeof styles> {}

const FooterComponent: React.SFC<FooterComponentProps> = props => {
  const currentYear = new Date().getFullYear();
  const copyright = <div id="copyright">© 2019{currentYear > 2019 ? `-${currentYear}` : ""} zachaREI | <Link to="/terms">Terms</Link> | <Link to="/privacy">Privacy</Link></div>;
  return (
    <footer className={props.classes.container}>
      <Divider variant="middle" />
      <Grid container={true} justify="center" alignItems="center" className={props.classes.container}>
        <Grid item={true} md={8} xs={10}>
          <Grid container={true} justify="space-between" alignItems="flex-start">
            <Grid item={true} xs={5}>
              <Typography variant="h6" className={props.classes.logoAndName}>
                <img className={props.classes.companyLogo} width="30" src={zachaREI_logo} alt="site logo" />
                zachaREI
              </Typography>
            </Grid>
            <Grid item={true} xs={7} className={props.classes.containerItem}>
              <Grid container={true} justify="space-evenly">
                <Grid item={true} sm={8} xs={12} className={props.classes.containerItem}>
                  <ContactUs />
                </Grid>
                <Grid item={true} sm={4} xs={12} className={props.classes.containerItem}>
                  <Link to="/about" className={props.classes.link}>
                    About Me
                  </Link>
                  <Link to="/faq" className={props.classes.link}>
                    FAQ
                  </Link>
                  <Link to="/contact" className={props.classes.link}>
                    Contact
                  </Link>
                  <Link to="/terms" className={props.classes.link}>
                    Terms and Conditions
                  </Link>
                  <Link to="/privacy" className={props.classes.link}>
                    Privacy Policy
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <div className={props.classes.copyright}>{copyright}</div>
        </Grid>
      </Grid>
    </footer>
  );
};

const Footer = withStyles(styles)(FooterComponent);
export { Footer };
