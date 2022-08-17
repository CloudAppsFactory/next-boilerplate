import * as React from "react";
import styles from './Navbar.module.css';
import { INavbar } from "./Navbar";

const Navbar: React.FunctionComponent<INavbar.IProps> = (): JSX.Element => {
    return <div className={styles.mainparent} >
        <div>
        <img draggable={false} src="/images/svg/feebharologo.svg" width="100%" height="50px" />
            
        </div>
        <div className={styles.btns}>
            {buttons.map((btn,indx)=>{
               return(<div key={indx} className={styles.btnEle}>
                {btn}
            </div>) 
            })}
            
        </div>
        </div>;
};


const buttons = [
    'Home',
    'About Us',
    'Features',
    'Clients',
    'Contact Us'
]

export { Navbar };
