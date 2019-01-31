import React from "react";
import { Image } from 'semantic-ui-react'
import DecemberUniform from '../images/illustrations/decuni.jpg';
import Storm from '../images/illustrations/dogholidaysquare.jpg';
import Instagram from '../images/illustrations/instame.jpg';
import KitKat from '../images/illustrations/kitkat.png';
import Google from '../images/illustrations/doodle4google.png';
import Desk from '../images/illustrations/desk.jpg';

import 'semantic-ui-css/semantic.min.css'

const Illustrations = () => (
  <Image.Group style={{height: '100%', position: 'relative', marginLeft:'10%', marginRight: '10%', marginBottom: '10%'}} size='medium' >
    <Image src={DecemberUniform} rounded/>
    <Image src={Storm} rounded/>
    <Image src={KitKat} rounded/>
    <Image src={Instagram} rounded/>
    <Image src={Desk} rounded/>
    <Image src={Google} rounded/>
  </Image.Group>
)

export default Illustrations
