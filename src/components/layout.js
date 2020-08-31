import React from "react";
import FadeIn from "react-fade-in";
import Helmet from "react-helmet";
import Icon from "../assets/icon.png";
import Footer from "../components/footer";

export default class Layout extends React.Component {
  render() {
    return (
      <div
        style={{
          color: "#332F21",
          position: "absolute",
          right: 0,
          top: 0,
          width: "100%",
        }}
      >
        <FadeIn>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Vevina Trinh</title>
            <link rel="icon" type="image/png" href={Icon} />
            <script src="https://kit.fontawesome.com/e8ca0f6d04.js"></script>
            <style>{"body { background-color: #fff5f2; }"}</style>
          </Helmet>
          <div style={{ marginLeft: "5%", marginRight: "5%" }}>
            {this.props.children}
          </div>
        </FadeIn>
      </div>
    );
  }
}
