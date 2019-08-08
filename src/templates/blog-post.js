import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Footer from "../components/footer";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div style={{ textAlign: "center" }}>
        <div style={{ marginTop: 75, marginBottom: 75 }}>
          <h1>{post.frontmatter.title}</h1>
          <a href={post.frontmatter.link} target="_blank">
            View this project on Behance!
          </a>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <div
        style={{
          width: "100%",
          bottom: 0,
          position: "absolute"
        }}
      >
        <div style={{ margin: 50, right: 150, position: "absolute" }}>
          <h4 style={{ textAlign: "right" }}>Connect with me!</h4>
          <Footer />
        </div>
      </div>
    </Layout>
  );
};
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        link
      }
    }
  }
`;
