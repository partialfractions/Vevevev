import React from "react";

export default class Footer extends React.Component {
  openInNewTab(url) {
    const win = window.open(url, "_blank");
    win.focus();
  }
  render() {
    return (
      <div>
        <i
          onClick={() => this.openInNewTab("mailto:vevinatrinh@gmail.com")}
          style={{ margin: 5, opacity: 0.8 }}
          class="fas fa-envelope-square fa-2x"
        ></i>
        <i
          onClick={() =>
            this.openInNewTab("https://www.linkedin.com/in/trinhvev/")
          }
          style={{ margin: 5, opacity: 0.8 }}
          class="fab fa-linkedin fa-2x"
        ></i>
        <i
          onClick={() =>
            this.openInNewTab("https://github.com/partialfractions")
          }
          style={{ margin: 5, opacity: 0.8 }}
          class="fab fa-github-square fa-2x"
        ></i>
        <i
          onClick={() => this.openInNewTab("https://www.behance.net/vetrinh")}
          style={{ margin: 5, opacity: 0.8 }}
          class="fab fa-behance-square fa-2x"
        ></i>
      </div>
    );
  }
}
