import React from "react";
import Fade from 'react-fade'
import Helmet from "react-helmet";
import MainImg from '../images/webname1.png';
import IconImg from '../images/icon.png';
import WorkCards from '../components/workCards.js';
import FrontTyping from '../components/typing.js';
import Illustrations from '../components/illustrations.js';
import Contact from '../components/contact.js';


import { rhythm } from "../utils/typography";



export default () => {
  return (
    <div style={{height: '100%'}}>
      <Helmet>
           <meta charSet="utf-8" />
           <title>Vevina</title>
           <link rel="icon" type="image/png" href={IconImg}/>
       </Helmet>

       <Fade>
        {/*opening*/}
        <div style={{height: '100vh', width: '100vw'}}>
           <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90vw', height:'88vh', margin:'0 auto 0vh auto', paddingTop: '9vh'}}>
            <img src={MainImg} style={{ margin:'0 auto', maxHeight: '75vh', maxWidth: '80%'}} />
           </div>
           <FrontTyping/>
         </div>
         {/*work*/}
         <div style={{marginLeft:'10%'}}>
          <h1 style={{fontSize: '500%', color: '#c26e60'}}>work</h1>
         </div>
         <WorkCards/>
         {/*illustrations*/}
         <div style={{marginLeft:'10%'}}>
          <h1 style={{fontSize: '500%', color: '#c26e60'}}>latest illustrations</h1>
         </div>
         <Illustrations/>
         {/*contact*/}
         <div style={{marginLeft:'10%'}}>
          <h1 style={{fontSize: '500%', color: '#c26e60'}}>meet me!</h1>
         </div>
         <Contact/>
       </Fade>
    </div>
  );
};
