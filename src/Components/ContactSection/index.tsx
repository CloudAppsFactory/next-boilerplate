import React from "react";
import styles from './ContactSection.module.css'
import { SlantDiv } from "./slantDiv";

export const ContactSection: React.FunctionComponent = (): JSX.Element => {
    return (
<>
    <div className={styles.mainparent}>
       <div >
           <img src="/images/contact.png" width="auto" height="150px" />
       </div>
       <div className={styles.txtmain}  >

           <div style={{fontSize: '30px',fontWeight:"bold"}}>
           Let's get in touch
           </div>
           <div className={styles.formrow}>
                <div>
                <input className={styles.inptt} type="text" placeholder="Your Name" />
                </div>
                <div>
                <input className={styles.inptt} type="text" placeholder="Email Address" />
                </div>
           </div>

           <div className={styles.formrow}>
                <div>
                <input className={styles.inptt} type="text" placeholder="Phone No." />
                </div>
                <div>
                <input className={styles.inptt} type="text" placeholder="Status" />
                </div>
           </div>

           <div className={styles.txtareaouter}>
           <textarea style={{width:"-webkit-fill-available"}} placeholder="Your Message" ></textarea>
           </div>

           <div className={styles.formrow}>
           <button className={styles.buttonn}>Submit</button>
           </div>

       </div>
       </div>
       <SlantDiv/>
    </>
    );
};

