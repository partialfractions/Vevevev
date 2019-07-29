// import React from "react"
// import { Link } from "gatsby"

// const ListLink = props => (
//   <li style={{ display: `inline-block`, marginRight: `1rem` }}>
//     <Link to={props.to}>{props.children}</Link>
//   </li>
// )

// export default ({ children }) => (
//   <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
//     <header style={{ marginBottom: `1.5rem`, width: '100%' }}>
//       <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
//         <h3 style={{ display: `inline` }}>MySweetSite</h3>
//       </Link>
//       <ul style={{ listStyle: `none`, float: `right` }}>
//         <ListLink to="/">Home</ListLink>
//         <ListLink to="/about/">About</ListLink>
//         <ListLink to="/contact/">Contact</ListLink>
//       </ul>
//     </header>

//     {children}
//   </div>
// )

import React from "react";
import { Link } from "gatsby";
import headerStyles from "./header.module.css";
// import { useStaticQuery, Link, graphql } from "gatsby"

export default ({ children }) => {
  // const data = useStaticQuery(
  //     graphql`
  //       query {
  //         site {
  //           siteMetadata {
  //             title
  //           }
  //         }
  //       }
  //     `
  //   )
  return (
    <div style={{ margin: 0, maxWidth: "80vw", padding: 50, paddingTop: 15 }}>
      <div>
        <Link to={`/`}>
          <h3
            className={headerStyles.header}
            style={{ color: "black", display: "inline-block" }}
          >
            VT
          </h3>
        </Link>
        <Link
          to={`/about/`}
          style={{ color: "black", textDecoration: "none", marginLeft: 20 }}
        >
          INFO
        </Link>
        <Link
          to={`/about/`}
          style={{ color: "black", textDecoration: "none", marginLeft: 20 }}
        >
          RESUME
        </Link>
      </div>
      {children}
      <div style={{ bottom: 0, position: "relative" }}>hi</div>
    </div>
  );
};
