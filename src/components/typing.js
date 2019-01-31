import React from "react";
import Typing from 'react-typing-animation';


const FrontTyping = () => (
  <div style={{marginLeft:'10%', fontSize: '200%', color: '#c26e60', position: 'relative'}}>
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
)

export default FrontTyping
