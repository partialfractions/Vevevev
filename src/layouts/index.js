import React from "react";
import g from "glamorous";
import { css } from "glamor";
import Link from "gatsby-link";

import { rhythm } from "../utils/typography";

export default ({ children, data }) =>
  <g.Div
    background={'#ffebee'}
    height={'100vh'}
    margin={`0 auto`}
    maxWidth={'100vw'}
    padding={rhythm(2)}
    paddingTop={rhythm(1.5)}
  >
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
