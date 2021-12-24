import * as React from "react";
import { FeatureCard } from "./FeatureCard";
import { SlantDiv } from "./slantDiv";
import styles from './FeatureTiles.module.css';

export const FeatureTiles: React.FunctionComponent = (): JSX.Element => {
    return (
        <>
            <div style={{background:"#EEEFF2"}} >
            <div className={styles.text} >
                Enabling fees payment for schools online
            </div>
            <div className={styles.hrr}></div>

            <div className={styles.cardsDiv}>

                    {CardsDetails.map((card,indx)=>
                    <FeatureCard key={indx} text={card.text} icon={card.ico} isFullImg={card.isFullImg} />
                        )}
                    
            </div>
            </div>
            <SlantDiv/>
            
        </>

    );
};


const CardsDetails = [
    {
        text:"100% Free",
        ico:"freeico.svg",
        isFullImg:false
    },
    {
        text:"Faster Payments",
        ico:"fastico.svg",
        isFullImg:false
    },
    {
        text:"Better Accounting & Visibility",
        ico:"accico.svg",
        isFullImg:true
    }
]



