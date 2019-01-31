import React from "react";
import { Image } from 'semantic-ui-react'
import Behance from '../images/logos/behance.png';
import Dribbble from '../images/logos/dribbble.png';
import Email from '../images/logos/email.png';
import Github from '../images/logos/github.png';
import Instagram from '../images/logos/instagram.png';
import LinkedIn from '../images/logos/linkedin.png';

import 'semantic-ui-css/semantic.min.css'

const Contact = () => (
  <Image.Group style={{height: '100%', position: 'relative', marginLeft:'10%', marginRight: '10%', marginBottom: '2%'}} size='mini'>
    <Image style={{paddingRight:'1%'}} src={Email} as='a' href='mailto:vevinatrinh@gmail.com' target='_blank'/>
    <Image style={{paddingRight:'1%'}} src={LinkedIn} as='a' href='https://www.linkedin.com/in/trinhvev/' target='_blank'/>
    <Image style={{paddingRight:'1%'}} src={Github} as='a' href='https://github.com/partialfractions' target='_blank'/>
    <Image style={{paddingRight:'1%'}} src={Behance} as='a' href='https://www.behance.net/vevinatrin368b' target='_blank'/>
    <Image style={{paddingRight:'1%'}} src={Dribbble} as='a' href='https://dribbble.com/vevevev' target='_blank'/>
    <Image style={{paddingRight:'1%'}} src={Instagram} as='a' href='https://www.instagram.com/vevevevina/' target='_blank'/>
  </Image.Group>
)

export default Contact
