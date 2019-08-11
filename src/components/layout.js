import React from "react";
import FadeIn from "react-fade-in";
import Helmet from "react-helmet";
import Icon from "../assets/icon.png";

export default class Layout extends React.Component {
  render() {
    return (
      <FadeIn>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Vevina</title>
          <link rel="icon" type="image/png" href={Icon} />
        </Helmet>
        <div
          style={{
            position: "relative",
            padding: 100,
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
