import * as React from "react";
import { NextPage } from 'next'
import styles from './FeatureCard.module.css';

interface Props {
    text?: string;
    icon?: string;
    isFullImg:boolean
  }


export const FeatureCard: NextPage<Props> = ({ text , icon ,isFullImg }) => (
      
        <div className={styles.outrCard}>
            
           {isFullImg ? <img className={styles.imgBrdr} src={`/images/svg/${icon}`} width="100%" height="50px" /> : <img className={styles.imgBrdr} src={`/images/svg/${icon}`} width="100%" height="50px" />} 
            
            <div className={styles.text}>
            {text}
            </div>
           
        </div>
    
  )
  

  