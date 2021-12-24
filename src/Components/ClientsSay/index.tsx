import React from "react";
import styles from './ClientsSay.module.css'
import { SlantDiv } from "./slantDiv";

export const ClientsSay: React.FunctionComponent = (): JSX.Element => {
    return (
<>
    <div className={styles.mainparent}>
       <div >
           <img src="/images/clientsay.png" width="auto" height="250px" />
       </div>
       <div className={styles.txtmain}  >
       <div className={styles.hrr}></div>
           <div style={{fontSize: '30px'}}>
           What Our Client Say
           </div>
           <div>
           <img src="/images/svg/quote.svg" width="auto" height="30px" />
           </div>
           <div className={styles.para}>
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.
           </div>

           <div className={styles.postername}>
               James Anderson
           </div>
           <div className={styles.posterposition}>
               Don Bosco Principle
           </div>
      
       </div>
       
       </div>

       <SlantDiv/>
       
    </>
    );
};

