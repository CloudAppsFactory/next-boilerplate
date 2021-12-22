import * as React from "react";
import { FeatureCard } from "./FeatureCard";
import { SlantDiv } from "./slantDiv";

export const FeatureTiles: React.FunctionComponent = (): JSX.Element => {
    return (
        <>
            <div style={{background:"#EEEFF2"}} >
            <div style={Styles.text}>
                Enabling fees payment for schools online
            </div>
            <div style={Styles.hrr}></div>

            <div style={Styles.cardsDiv}>

                    {CardsDetails.map(card=>
                    <FeatureCard text={card.text} icon={card.ico} isFullImg={card.isFullImg} />
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

const Styles = {
    text:{
        color:"#02042B",
        fontSize: "30px",
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: "40px",
        maxWidth:"400px",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "-1px"
    },
    hrr:{
        borderBottom: "solid 3px #2782F4",
        width: "5%",
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: "15px",
        marginBottom: "35px"
    },
    cardsDiv:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        flexWrap: 'wrap',
        width:'80%',
        alignItems:'stretch',
        paddingTop: '15px',
        paddingBottom: '45px'
    }
}

