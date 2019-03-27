import { Link } from "gatsby";
import React from "react";

interface NavLinkMap {
  value: string;
  href?: string;
}

interface NavBarProps {
  siteTitle: string;
  siteLogo?: string;
  navLinks?: NavLinkMap[];
}

export const NavBar: React.SFC<NavBarProps> = props => {
  let navLinksSection;
  if (props.navLinks && props.navLinks.length > 0) {
    const navLinks = props.navLinks.map((item, index) => {
      return (
        <li className="nav-item" key={index}>
          <Link className="p-2 text-dark nav-link" to={item.href || "#"}>
            {item.value}
          </Link>
        </li>
      );
    });
    navLinksSection = (
      <nav className="my-2 my-md-0 mr-md-3" role="navigation">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">{navLinks}</ul>
        </div>
      </nav>
    );
  }
  return (
    <header>
      <div className="navbar navbar-expand-md navbar-light fixed-top bg-light border-bottom shadow-sm py-3 px-md-5">
        <h5 className="my-0 mr-md-auto font-weight-normal">
          <Link className="navbar-brand" to="/">
            {props.siteTitle}
          </Link>
        </h5>
        {navLinksSection}
      </div>
    </header>
  );
};

NavBar.defaultProps = {
  siteLogo: "",
  navLinks: [],
};
