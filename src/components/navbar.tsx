import { Link } from "gatsby";
import React from "react";

interface NavLinkMap {
  label: string;
  href?: string;
}

interface NavBarProps {
  siteTitle: string;
  siteLogo?: string;
  navLinks?: NavLinkMap[];
}

export class NavBar extends React.Component<NavBarProps, { isTop: boolean }> {
  static defaultProps: Partial<NavBarProps> = {
    siteLogo: "",
    navLinks: [],
  };
  state = {
    isTop: true,
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 10;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  }

  public render() {
    let navLinksSection;
    if (this.props.navLinks && this.props.navLinks.length > 0) {
      const navLinks = this.props.navLinks.map((item, index) => {
        return (
          <li className="nav-item" key={index}>
            {item.href ? (
              <Link className="p-2 nav-link" to={item.href}>
                {item.label}
              </Link>
            ) : (
              <a className="p-2 nav-link" href="#">{item.label}</a>
            )}
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
    let logo;
    if (this.props.siteLogo) {
      logo = <img className="navbar-logo align-bottom" src={this.props.siteLogo} alt="site logo" />;
    }
    return (
      <header>
        <div
          className={`navbar navbar-expand-md fixed-top py-3 px-md-5 ${
            this.state.isTop ? "" : "scrolled"
          }`}
        >
          <div className="container">
            <h5 className="my-0 mr-md-auto font-weight-normal">
              <Link className="navbar-brand" to="/">
                <div className="title-with-logo">
                  {logo}
                  <span className="site-title align-bottom">{this.props.siteTitle}</span>
                </div>
              </Link>
            </h5>
            {navLinksSection}
          </div>
        </div>
      </header>
    );
  }
}
