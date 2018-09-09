import React from "react";
import g from "glamorous";
import { css } from "glamor";
import Link from "gatsby-link";

import { rhythm } from "../utils/typography";

const linkStyle = css({ float: `right` });

export default ({ children, data }) =>
  <g.Div
    background={'#ffebee'}
    margin={`0 auto`}
    maxWidth={700}
    padding={rhythm(2)}
    paddingTop={rhythm(1.5)}
  >
  <Link className={linkStyle} to={`/`}>
    Home
  </Link>
  <Link className={linkStyle} to={`/about/`}>
    About
  </Link>
  <Link className={linkStyle} to={`/experience/`}>
    Experience
  </Link>
  <Link className={linkStyle} to={`/projects/`}>
    Projects
  </Link>
    {children()}
  </g.Div>

  export const query = graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `
