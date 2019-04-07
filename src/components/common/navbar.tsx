import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { createStyles, Theme, withStyles, WithStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    logoName: {
      textTransform: "none", 
      fontSize: "1.2rem" 
    },
    [theme.breakpoints.down("xs")]: {
      logoName: {
        display: "none",
      },
    },
  });

interface NavLinkMap {
  label: string;
  href: string;
}

interface NavBarProps extends WithStyles<typeof styles> {
  siteTitle: string;
  siteLogo?: string;
  navLinks?: NavLinkMap[];
  primaryAction?: NavLinkMap;
}

const NavBarComponent: React.SFC<NavBarProps> = props => {
  let navLinks: JSX.Element[] = [];
  if (props.navLinks && props.navLinks.length > 0) {
    navLinks = props.navLinks.map((item, index) => {
      return (
        <Button key={index} href={item.href} color="inherit">
          {item.label}
        </Button>
      );
    });
  }
  if (props.primaryAction) {
    navLinks.push(
      <Button key="primary-action" href={props.primaryAction.href} variant="contained" color="secondary">
        {props.primaryAction.label}
      </Button>
    );
  }

  return (
    <header className={props.classes.root}>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={props.classes.grow}>
            <Button href="/" color="inherit" aria-label="home">
              {props.siteLogo ? (
                <img className="navbar-logo align-bottom" src={props.siteLogo} alt="site logo" width="40" />
              ) : null}
              <span className={props.classes.logoName}>
                {props.siteTitle}
              </span>
            </Button>
          </Typography>
          {navLinks}
        </Toolbar>
      </AppBar>
    </header>
  );
};

NavBarComponent.defaultProps = {
  siteTitle: "",
  navLinks: [],
};

const NavBar = withStyles(styles)(NavBarComponent);
export { NavBar };