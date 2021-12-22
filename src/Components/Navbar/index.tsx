import * as React from "react";

import { INavbar } from "./Navbar";

const Navbar: React.FunctionComponent<INavbar.IProps> = (): JSX.Element => {
    return <div style={Styles.mainparent} >
        <div>
        <img src="/images/svg/feebharologo.svg" width="100%" height="50px" />
            
        </div>
        <div style={Styles.btns}>
            {buttons.map(btn=>{
               return(<div style={Styles.btnEle}>
                {btn}
            </div>) 
            })}
            
        </div>
        </div>;
};

const Styles = {
    mainparent:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        marginLeft: 'auto',
        marginRight: 'auto',
        flexWrap: 'wrap',
        background:"#02042B",
        color:"#fff",
        width:'90%',
        alignItems:'baseline',
        paddingTop: '15px',
        paddingBottom: '15px'
    },
    btns:{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    btnEle:{
        marginRight: '20px',
    }
}

const buttons = [
    'Home',
    'About Us',
    'Features',
    'Clients',
    'Contact Us'
]

export { Navbar };
