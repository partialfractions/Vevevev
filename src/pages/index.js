import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Footer from "../components/footer";
import Resume from "../assets/resume.pdf";

export default class App extends React.Component {
  items = this.props.data.allMarkdownRemark.edges
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

  render() {
    return (
      <Layout>
        <div
          style={{
            fontSize: "200%",
            fontWeight: "lighter",
            marginTop: "15%",
            marginBottom: 20,
          }}
        >
          just for fun
        </div>

        <Link to={`/about`}>
          <i
            style={{
              color: "#332F21",
              display: "inline-block",
              marginRight: 12,
            }}
            class="fas fa-hotdog"
          ></i>
          <a
            style={{
              color: "#332F21",
              display: "inline-block",
            }}
          >
            about me
          </a>
        </Link>
        <div>
          <a
            href={"mailto:vevinatrinh@gmail.com"}
            style={{
              color: "#332F21",
            }}
          >
            <i
              style={{ display: "inline-block", marginRight: 12 }}
              class="far fa-paper-plane"
            ></i>
            <a
              style={{
                lineHeight: 2,
              }}
            >
              vevinatrinh@gmail.com
            </a>
          </a>
        </div>
        {this.items}
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
