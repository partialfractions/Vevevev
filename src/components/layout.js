import React from "react";
import FadeIn from "react-fade-in";
import Helmet from "react-helmet";
import Icon from "../assets/icon.png";
import LayoutStyle from "./layout.module.css";

export default class Layout extends React.Component {
  render() {
    return (
      <FadeIn>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Vevina Trinh</title>
          <link rel="icon" type="image/png" href={Icon} />
          <script src="https://kit.fontawesome.com/e8ca0f6d04.js"></script>
        </Helmet>
        <div
          style={{
            position: "relative",
            padding: "10%",
            paddingTop: 50,
            color: "#414141"
          }}
        >
          {this.props.children}
        </div>
      </FadeIn>
    );
  }
}
