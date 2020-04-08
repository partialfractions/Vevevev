import React from "react";
import FadeIn from "react-fade-in";
import Helmet from "react-helmet";
import Icon from "../assets/icon.png";

export default class Layout extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#fff5f2",
          height: "100%",
          position: "absolute",
          right: 0,
          top: 0,
          width: "100%"
        }}
      >
        <FadeIn>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Vevina Trinh</title>
            <link rel="icon" type="image/png" href={Icon} />
            <script src="https://kit.fontawesome.com/e8ca0f6d04.js"></script>
          </Helmet>
          <div
            style={{
              align: "center",
              color: "#332F21",
              padding: "10%",
              position: "relative"
            }}
          >
            {this.props.children}
          </div>
        </FadeIn>
      </div>
    );
  }
}
