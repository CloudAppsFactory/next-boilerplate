import * as React from "react";

export const SlantDiv: React.FunctionComponent = (): JSX.Element => {
    return (
        <svg style={Styles.main} viewBox="0 0 1 1" preserveAspectRatio="none">
        <polyline points="0,0  1,0  0,1" fill="#02042B" id="top"/>
        <polyline points="1,0  1,1  0,1" fill="#EEEFF2" id="bottom"/>
    </svg>
    );
};


const Styles = {
    main:{
        width: "100%",
        height: "100px"
    }
}