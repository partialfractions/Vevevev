import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Footer from "../components/footer";
import { Link } from "gatsby";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <Link
        to={`/`}
        style={{ position: "-webkit-sticky", position: "sticky", top: 55 }}
      >
        <h1
          style={{
            color: "#414141",
            display: "inline-block",
          }}
        >
          ←
        </h1>
      </Link>
      <div
        style={{ textAlign: "center", paddingLeft: "12%", paddingRight: "12%" }}
      >
        <div style={{ marginTop: 75, marginBottom: 75 }}>
          <h1>{post.frontmatter.title}</h1>
          <a
            href={post.frontmatter.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#414141", textDecoration: "none" }}
          >
            View this on Behance →
          </a>
        </div>
        <div
          style={{ lineHeight: 2 }}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
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
