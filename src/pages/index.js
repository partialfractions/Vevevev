import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Footer from "../components/footer";
import Resume from "../assets/resume.pdf";

export default class App extends React.Component {
  illustrationItems = this.props.data.allMarkdownRemark.edges
    .filter(({ node }) => node.frontmatter.category === "illustration")
    .map(({ node }) => {
      return (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <img src={node.frontmatter.image} alt="" height={400} />
          </Link>
        </div>
      );
    });

  projectItems = this.props.data.allMarkdownRemark.edges
    .filter(({ node }) => node.frontmatter.category === "project")
    .map(({ node }) => {
      return (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <img src={node.frontmatter.image} alt="" height={400} />
          </Link>
        </div>
      );
    });
  render() {
    return (
      <Layout>
        <div
          style={{
            fontSize: "200%",
            fontWeight: "lighter",
            marginTop: "15%",
            marginBottom: 20
          }}
        >
          be back soon
        </div>
        <div>
          {false && (
            <i
            style={{ display: "inline-block", marginRight: 12 }}
            class="far fa-paper-plane"
            ></i>
          )}
          in the meantime, you can reach me at
          <a
            href={"mailto:vevinatrinh@gmail.com"}
            style={{
              color: "#332F21",
              lineHeight: 2,
              marginLeft: 6
            }}
          >
             vevinatrinh@gmail.com
          </a>
        </div>
        {false && (
          <div>
          <i
            style={{ display: "inline-block", marginRight: 12, opacity: 0.6 }}
            class="far fa-file"
          ></i>
          <a
            href={Resume}
            style={{
              color: "#332F21",
              textDecoration: "none",
              lineHeight: 2
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            resume
          </a>
        </div>
        )}
        {false && (
          <div
          style={{
            width: "100vw",
            marginBottom: 20,
            textAlign: "right",
            right: 0,
            position: "absolute",
            marginRight: "10%",
            paddingBottom: 50
          }}
        >
          <Footer />
          <p style={{ marginTop: 10 }}>Designed and developed with ❤️</p>
        </div>
        )}
      </Layout>
    );
  }
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            category
            image
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
