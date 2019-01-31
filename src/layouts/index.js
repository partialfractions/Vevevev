import React from "react";

import { rhythm } from "../utils/typography";

export default ({ children, data }) =>
  <div style={{background:'#ffcdd2'}}>
    {children()}
  </div>

  export const query = graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `
