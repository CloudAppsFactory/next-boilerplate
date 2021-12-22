// #region Global Imports
import * as React from "react";
import { LineArt } from "./LineArt";
import { InstituteDropDown } from "./InstituteDropDown";
import { SlantDiv } from "./slantDiv";

export const InstituteSelection: React.FunctionComponent = (): JSX.Element => {
    return (
        <>
            <div style={Styles.maindiv}>
                <InstituteDropDown />
                <LineArt />
            </div>
            <SlantDiv />
        </>

    );
};

const Styles = {
    maindiv: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        color: "#fff",
        paddingTop: "30px",
        paddingBottom: "30px",
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        flexWrap: 'wrap',
    }
}

