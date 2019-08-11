import React from "react";
import { Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

export default class Footer extends React.Component {
  openInNewTab(url) {
    const win = window.open(url, "_blank");
    win.focus();
  }
  render() {
    return (
      <div>
        <Button
          onClick={() => this.openInNewTab("https://www.behance.net/vetrinh")}
          style={{ margin: 5 }}
          circular
          color="white"
          icon="behance"
        />
        <Button
          onClick={() =>
            this.openInNewTab("https://www.linkedin.com/in/trinhvev/")
          }
          style={{ margin: 5 }}
          circular
          color="white"
          icon="linkedin"
        />
        <Button
          onClick={() =>
            this.openInNewTab("https://github.com/partialfractions")
          }
          style={{ margin: 5 }}
          circular
          color="white"
          icon="github"
        />
        <Button
          onClick={() => this.openInNewTab("mailto:vevinatrinh@gmail.com")}
          style={{ margin: 5 }}
          circular
          color="white"
          icon="mail outline"
        />
      </div>
    );
  }
}
