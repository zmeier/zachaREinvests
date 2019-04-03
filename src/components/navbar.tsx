import Button from "@material/react-button";
import TopAppBar, { TopAppBarRow, TopAppBarSection, TopAppBarTitle } from "@material/react-top-app-bar";
import React from "react";

interface NavLinkMap {
  label: string;
  href: string;
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
          <Button key={index} href={item.href} unelevated={true}>
            {item.label}
          </Button>
        );
      });
      navLinksSection = (
        <TopAppBarSection align="end" role="toolbar">
          {navLinks}
        </TopAppBarSection>
      );
    }

    const homeLink = (
      <Button href="/" unelevated={true}>
        {this.props.siteLogo ? (
          <img className="navbar-logo align-bottom" src={this.props.siteLogo} alt="site logo" />
        ) : null}
        <span style={{textTransform: "none"}}>{this.props.siteTitle}</span>
      </Button>
    );
    return (
      <header>
        <TopAppBar>
          <TopAppBarRow>
            <TopAppBarSection align="start">
              <TopAppBarTitle>{homeLink}</TopAppBarTitle>
            </TopAppBarSection>
            {navLinksSection}
          </TopAppBarRow>
        </TopAppBar>
      </header>
    );
  }
}
