import * as React from "react";
import styles from './Testimonials.module.css';

export const Testimonials: React.FunctionComponent = (): JSX.Element => {
    return (
        <>
            <div className={styles.mainparent}>

               <div className={styles.txtmain}  >
               <div className={styles.hrr}></div>
                   <div style={{fontSize: '30px',fontWeight:'bold'}}>
                   Trusted by Schools <br/> & Institutes
                   </div>
                   <div className={styles.para}>
                   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                   </div>
                   <div className={styles.countMain}>
                            <div>
                                <div className={styles.countVal}>
                                    10K+
                                </div>
                                <div className={styles.countDesc}>
                                    User from multiple schools across India
                                </div>
                            </div>
                            <div>
                            <div>
                                <div className={styles.countVal}>
                                    4K+
                                </div>
                                <div className={styles.countDesc}>
                                    Joining every month
                                </div>
                            </div>
                                </div>
                   </div>
              
               </div>

               <div >
               <div className="myGallery" style={{maxWidth: "420px",margin:"30px 20px 20px 20px"}}>
                   {[1,2,3,4,5,6,7,8,9,10,11,12,13].slice(0, 12).map(indx=>
                     <img width="120px" height="60px" style={{margin:"10px"}} src={"https://picsum.photos/190/190?"+indx} />
                    )}
</div>
               </div>
               
               </div>
  
            </>
            );
};

