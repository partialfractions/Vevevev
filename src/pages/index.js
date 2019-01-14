import React from "react";
import Fade from 'react-fade'
import g from "glamorous";
import Link from "gatsby-link";
import Typing from 'react-typing-animation';
import MainImg from '../images/webname1.png';


import { rhythm } from "../utils/typography";

export default () => {
  return (
    <Fade>
      <div style={{height: '100vh', width: '100vw'}}>
        <div style={{width: '90vw', margin:'0 auto 0vh auto', position: 'relative', paddingTop: '7vh'}}><img src={MainImg} style={{margin:'0', maxHeight: '75vh', position: 'relative', maxWidth: '100%'}} /></div>
        <div style={{width: '95vw', height: '10vh', fontSize: '200%', color: '#c26e60', position: 'relative', float:'right'}}>
          <Typing loop={true}>
            <div>
              Vevina Trinh
              <Typing.Delay ms={1000} />
              <Typing.Backspace count={12} />
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
              Illustrator
              <Typing.Delay ms={1000} />
              <Typing.Backspace count={11} />
              Friend
              <Typing.Delay ms={1000} />
              <Typing.Backspace count={6} />
            </div>
          </Typing>
        </div>
      </div>
    </Fade>

  );
};
