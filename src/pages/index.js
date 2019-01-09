import React from "react";
import g from "glamorous";
import Link from "gatsby-link";
import Typing from 'react-typing-animation';

import { rhythm } from "../utils/typography";

export default () => {
  return (
    <div style={{fontSize: '150%'}}>
      <h1
        display={"inline-block"}
        fontSize={"500%"}
      >
        VEVINA TRINH
      </h1>
      <Typing loop={true}>
        <div>
          Computer Science Student
          <Typing.Delay ms={1000} />
          <Typing.Backspace count={24} />
          Plant Parent
          <Typing.Delay ms={1000} />
          <Typing.Backspace count={12} />
          Rock Climber
          <Typing.Delay ms={1000} />
          <Typing.Backspace count={12} />
          Coffee Lover
          <Typing.Delay ms={1000} />
          <Typing.Backspace count={12} />
          Web Developer
          <Typing.Delay ms={1000} />
          <Typing.Backspace count={13} />
          Illustrator
          <Typing.Delay ms={1000} />
          <Typing.Backspace count={11} />
          Friend
          <Typing.Delay ms={1000} />
          <Typing.Backspace count={6} />
        </div>
      </Typing>
    </div>
  );
};
