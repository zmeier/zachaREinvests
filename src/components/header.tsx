import { Link } from "gatsby"
import React from "react"

interface HeaderProps {
  siteTitle: string
}

class Header extends React.Component<HeaderProps> {
  static defaultProps: HeaderProps = {
    siteTitle: "",
  }

  public render() {
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
              {this.props.siteTitle}
            </Link>
          </h1>
        </div>
      </header>
    )
  }
}

export default Header
