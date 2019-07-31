import React from "react";
import { Link } from "gatsby";
import headerStyles from "./header.module.css";
import Footer from "./footer";

export default class Layout extends React.Component {
  render() {
    return (
      <div
        style={{
          position: "relative",
          padding: 100,
          paddingTop: 50
        }}
      >
        <div style={{ marginBottom: 50 }}>
          <Link to={`/`}>
            <h3
              className={headerStyles.header}
              style={{ color: "black", display: "inline-block" }}
            >
              VT
            </h3>
          </Link>
          <div style={{ position: "absolute", right: 100, top: 50 }}>
            <Link
              to={`/`}
              style={{ color: "black", textDecoration: "none", marginLeft: 20 }}
            >
              WORK
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
        </div>
        {this.props.children}
        <div
          style={{
            width: "100%",
            bottom: 0,
            position: "absolute"
          }}
        >
          <div style={{ margin: 50, right: 150, position: "absolute" }}>
            <h4 style={{ textAlign: "right" }}>Made with ❤️and ☕.</h4>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
