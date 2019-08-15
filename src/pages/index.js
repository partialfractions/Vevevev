import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Footer from "../components/footer";
import Typing from "react-typing-animation";
import Carousel from "../components/carousel";
import Resume from "../assets/resume.pdf";
import { Icon } from "semantic-ui-react";
// import "semantic-ui-css/semantic.min.css";

export default class App extends React.Component {
  frontTyping = () => (
    <div
      style={{
        fontSize: "200%",
        fontWeight: "lighter",
        marginTop: "15%",
        marginBottom: 50
      }}
    >
      <Typing loop={true}>
        <div>
          <span>vevina trinh</span>
          <Typing.Delay ms={1000} />
          <Typing.Backspace count={13} />
          <span>coffee lover</span>
          <Typing.Delay ms={1000} />
          <Typing.Backspace count={13} />
          <span>plant parent</span>
          <Typing.Delay ms={1000} />
          <Typing.Backspace count={13} />
          <span>rock climber</span>
          <Typing.Delay ms={1000} />
          <Typing.Backspace count={13} />
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
        {this.frontTyping()}
        <p style={{ width: "67%", lineHeight: 2 }}>
          Computer science student at the University of Waterloo. Client-side
          software engineering intern at Zynga. Visual designer at Hack the
          North, Canada's largest hackathon.
        </p>
        <div>
          <i
            style={{ display: "inline-block", marginRight: 12, opacity: 0.6 }}
            class="far fa-paper-plane"
          ></i>
          <a
            href={"mailto:vevinatrinh@gmail.com"}
            style={{
              color: "#414141",
              textDecoration: "none",
              backgroundColor: "#fff2cc",
              lineHeight: 2
            }}
          >
            vevinatrinh@gmail.com
          </a>
        </div>
        <div>
          <i
            style={{ display: "inline-block", marginRight: 12, opacity: 0.6 }}
            class="far fa-file"
          ></i>
          <a
            href={Resume}
            style={{
              color: "#414141",
              textDecoration: "none",
              backgroundColor: "#fff2cc",
              lineHeight: 2
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            resume
          </a>
        </div>
        <div
          style={{
            width: "100%",
            alignItems: "center"
          }}
        >
          <div style={{ marginTop: 80, marginBottom: 120 }}>
            <Carousel items={this.projectItems} />
            <h4 style={{ fontWeight: "lighter" }}>PROJECTS</h4>
          </div>
          <div style={{ marginTop: 120, marginBottom: 30 }}>
            <Carousel items={this.illustrationItems} />
            <h4 style={{ fontWeight: "lighter" }}>ILLUSTRATIONS</h4>
          </div>
        </div>

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
