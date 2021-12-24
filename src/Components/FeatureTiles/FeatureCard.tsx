import * as React from "react";
import { NextPage } from 'next'

interface Props {
    text?: string;
    icon?: string;
    isFullImg:boolean
  }


export const FeatureCard: NextPage<Props> = ({ text , icon ,isFullImg }) => (
      
        <div style={Styles.outrcrd}>
            
           {isFullImg ? <img src={`/images/svg/${icon}`} width="100%" height="50px" /> : <img style={Styles.imgBrdr} src={`/images/svg/${icon}`} width="100%" height="50px" />} 
            
            <div style={Styles.txtstyl}>
            {text}
            </div>
           
        </div>
    
  )
  

  const Styles = {
      imgBrdr : {
        background: "#2783F3",
        width: "50px",
        height: "50px",
        padding: "12px",
        borderRadius: "100%"
    },
    txtstyl:{
        width: "100px",
        fontSize: "13px",
        fontWeight: "bold",
        marginTop: "10px",
        margin: "15px 12px 0px 12px"
    },
    outrcrd:{
    padding: "20px",
    textAlign: "center",
    background:"#fff",
    borderRadius:"20px",
    margin:"20px 20px 20px"
    }
  }