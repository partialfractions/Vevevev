import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Footer from "../components/footer";
import Typing from "react-typing-animation";
import Carousel from "../components/carousel";

export default class App extends React.Component {
  frontTyping = () => (
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

  illustrationItems = this.props.data.allMarkdownRemark.edges
    .filter(({ node }) => node.frontmatter.category === "illustration")
    .map(({ node }) => {
      return (
        <div key={node.id}>
          <Link
            to={node.fields.slug}
            style={{ color: "black", textDecoration: "none" }}
          >
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
          <Link
            to={node.fields.slug}
            style={{ color: "black", textDecoration: "none" }}
          >
            <img src={node.frontmatter.image} alt="" height={400} />
          </Link>
        </div>
      );
    });
  render() {
    return (
      <Layout>
        {this.frontTyping()}
        <div
          style={{
            width: "100%",
            alignItems: "center"
          }}
        >
          <div style={{ marginTop: 80, marginBottom: 120 }}>
            <h3>PROJECTS</h3>
            <Carousel items={this.projectItems} />
          </div>
          <div style={{ marginTop: 120, marginBottom: 30 }}>
            <h3>ILLUSTRATIONS</h3>
            <Carousel items={this.illustrationItems} />
          </div>
        </div>
        <div style={{ margin: 50, right: 50, position: "absolute" }}>
          <h4 style={{ textAlign: "right" }}>Connect with me!</h4>
          <Footer />
        </div>
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

// ReactDOM.render(<App />, document.getElementById("root"));
