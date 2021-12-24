import React from "react";
import { SlantDiv } from "./slantDiv";
import styles from './WelcomeSection.module.css'

export const WelcomeSection: React.FunctionComponent = (): JSX.Element => {
    return (
<>
    <div className={styles.mainparent}>
       <div >
           <img src="/images/svg/welcomelineart.svg" width="auto" height="250px" />
       </div>
       <div className={styles.txtmain}  >
       <div className={styles.hrr}></div>
           <div style={{fontSize: '30px'}}>
           Welcome to <br/> Feebharo
           </div>
           <div className={styles.para}>
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
           </div>
      
       </div>
       
       </div>
       <SlantDiv/>
    </>
    );
};

