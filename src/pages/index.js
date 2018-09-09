import React from "react";
import g from "glamorous";
import Link from "gatsby-link";
import Typing from 'react-typing-animation';

import { rhythm } from "../utils/typography";

export default () => {
  return (
    <div>
      <g.H1 display={"inline-block"}>
        VEVINA TRINH
      </g.H1>
      <Typing loop={true}>
        <div>
          Computer Science Student
          <Typing.Delay ms={1000} />
          <Typing.Backspace count={24} />
          Plant Parent
          <Typing.Delay ms={1000} />
          <Typing.Backspace count={12} />
        </div>
      </Typing>
    </div>
  );
};

// const AnimatedTypingComponent = () => (
//   <Typing>
//     <div>
//       Computer Science Student
//       <Typing.Backspace count={24} />
//       Plant Parent
//     </div>
//   </Typing>
// );

// export const query = graphql`
//   query IndexQuery {
//     allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
//       totalCount
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             date(formatString: "DD MMMM, YYYY")
//           }
//           fields {
//             slug
//           }
//           excerpt
//         }
//       }
//     }
//   }
// `;
