import * as React from "react";

export const InstituteDropDown: React.FunctionComponent = (): JSX.Element => {
    return (
        <div style={Styles.main}>
            <div style={{fontWeight:"bold"}}>
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

  <div>
  <button style={Styles.btnn}>Submit</button>
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
    },
    btnn:{
        color:"#fff",background:"#2783F3",
  border:"none",
  padding: "10px 28px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px",
  margin: "4px 2px",
  cursor: "pointer",
  marginTop:"10px"
  }
}
