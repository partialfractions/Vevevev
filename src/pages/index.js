import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Swiper from "react-id-swiper";
import Typing from "react-typing-animation";
import Carousel from "../components/carousel";

export default ({ data }) => {
  const frontTyping = () => (
    <div
      style={{
        fontSize: "200%"
      }}
    >
      <Typing loop={true}>
        <div>
          <span>vevina trinh</span>
          <Typing.Delay ms={1000} />
          <Typing.Backspace count={13} />
          <span>computer science student</span>
          <Typing.Delay ms={1000} />
          <Typing.Backspace count={25} />
          <span>plant parent</span>
          <Typing.Delay ms={1000} />
          <Typing.Backspace count={13} />
          <span>rock climber</span>
          <Typing.Delay ms={1000} />
          <Typing.Backspace count={13} />
          <span>coffee lover</span>
          <Typing.Delay ms={1000} />
          <Typing.Backspace count={13} />
          <span>illustrator</span>
          <Typing.Delay ms={1000} />
          <Typing.Backspace count={12} />
          <span>friend</span>
          <Typing.Delay ms={1000} />
          <Typing.Backspace count={7} />
        </div>
      </Typing>
    </div>
  );

  const illustrationItems = data.allMarkdownRemark.edges
    .filter(({ node }) => node.frontmatter.category === "illustration")
    .map(({ node }) => {
      return (
        <div key={node.id}>
          <Link
            to={node.fields.slug}
            style={{ color: "black", textDecoration: "none" }}
          >
            <img src={node.frontmatter.image} alt="" height={500} />
          </Link>
        </div>
      );
    });

  const projectItems = data.allMarkdownRemark.edges
    .filter(({ node }) => node.frontmatter.category === "project")
    .map(({ node }) => {
      return (
        <div key={node.id}>
          <Link
            to={node.fields.slug}
            style={{ color: "black", textDecoration: "none" }}
          >
            <img src={node.frontmatter.image} alt="" height={500} />
          </Link>
        </div>
      );
    });

  return (
    <Layout>
      <div>
        {frontTyping()}
        <div style={{ marginTop: 80, marginBottom: 120 }}>
          <h3>PROJECTS</h3>
          <Carousel items={projectItems} />
        </div>
        <div style={{ marginTop: 120, marginBottom: 30 }}>
          <h3>ILLUSTRATIONS</h3>
          <Carousel items={illustrationItems} />
        </div>
      </div>
    </Layout>
  );
};

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
