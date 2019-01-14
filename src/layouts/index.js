import React from "react";
import g from "glamorous";
import { css } from "glamor";
import Link from "gatsby-link";

import { rhythm } from "../utils/typography";

export default ({ children, data }) =>
  <g.Div
    background={'#ffcdd2'}
    height={'100%'}
    margin={`0 auto`}
    maxWidth={'100vw'}
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
