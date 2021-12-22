import * as React from "react";

export const InstituteDropDown: React.FunctionComponent = (): JSX.Element => {
    return (
        <div style={Styles.main}>
            <div>
            Fees bharna online hua 
            <br/>
            ab aasan !
            </div>

            <br/>
            <div style={{fontSize:'20px',alignSelf: 'flex-start'}}>
                Select School*
            </div>
            <div style={{fontSize:'20px',alignSelf: 'flex-start'}}>
            <div >
    <input id="myInput" type="text" name="myCountry" placeholder="Select" />
  </div>
            </div>
        </div>
    );
};

const Styles = {
    main:{
    height: "250px",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '30px',
    flexDirection:'column'
    }
}